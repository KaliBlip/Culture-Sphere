import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { EnhancedVRExperience } from '../immersive-experiences/EnhancedVRExperience';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'history' | 'art' | 'architecture' | 'language' | 'tradition';
  thumbnail: string;
  vrExperience?: {
    environmentUrl: string;
    hotspots: Array<{
      position: [number, number, number];
      title: string;
      description: string;
      audioUrl?: string;
    }>;
    artifacts?: Array<{
      name: string;
      modelUrl: string;
      position: [number, number, number];
      scale: [number, number, number];
      rotation: [number, number, number];
    }>;
  };
  lessons: Array<{
    id: string;
    title: string;
    content: string;
    videoUrl?: string;
    quiz?: {
      questions: Array<{
        question: string;
        options: string[];
        correctAnswer: number;
      }>;
    };
  }>;
}

interface EducationalPlatformProps {
  courses?: Course[];
  onCourseSelect?: (course: Course) => void;
  onLessonComplete?: (courseId: string, lessonId: string) => void;
  onQuizSubmit?: (courseId: string, lessonId: string, score: number) => void;
}

export function EducationalPlatform({
  courses = [],
  onCourseSelect,
  onLessonComplete,
  onQuizSubmit
}: EducationalPlatformProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Course['lessons'][0] | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showVR, setShowVR] = useState(false);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setCurrentLesson(course.lessons[0]);
    setShowVR(false);
    onCourseSelect?.(course);
  };

  const handleLessonComplete = () => {
    if (!selectedCourse || !currentLesson) return;
    onLessonComplete?.(selectedCourse.id, currentLesson.id);
    const currentIndex = selectedCourse.lessons.findIndex(
      lesson => lesson.id === currentLesson.id
    );
    if (currentIndex < selectedCourse.lessons.length - 1) {
      setCurrentLesson(selectedCourse.lessons[currentIndex + 1]);
    }
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleQuizSubmit = () => {
    if (!currentLesson?.quiz) return;
    
    const score = currentLesson.quiz.questions.reduce((total, question, index) => {
      return total + (quizAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    
    const percentage = (score / currentLesson.quiz.questions.length) * 100;
    onQuizSubmit?.(selectedCourse!.id, currentLesson.id, percentage);
    handleLessonComplete();
  };

  return (
    <div className="educational-platform">
      {!selectedCourse ? (
        <div className="course-catalog">
          <h1>Cultural Education Courses</h1>
          <div className="courses-grid">
            {courses.map((course) => (
              <div
                key={course.id}
                className="course-card"
                onClick={() => handleCourseSelect(course)}
              >
                <img src={course.thumbnail} alt={course.title} />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span className="instructor">Instructor: {course.instructor}</span>
                    <span className="duration">Duration: {course.duration}</span>
                    <span className={`level ${course.level}`}>{course.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="course-content">
          <div className="course-header">
            <h1>{selectedCourse.title}</h1>
            <button onClick={() => setSelectedCourse(null)}>Back to Courses</button>
          </div>

          <div className="lesson-navigation">
            {selectedCourse.lessons.map((lesson, index) => (
              <button
                key={lesson.id}
                className={`lesson-button ${
                  currentLesson?.id === lesson.id ? 'active' : ''
                }`}
                onClick={() => setCurrentLesson(lesson)}
              >
                {index + 1}. {lesson.title}
              </button>
            ))}
          </div>

          {currentLesson && (
            <div className="lesson-content">
              <h2>{currentLesson.title}</h2>
              <div className="content">
                {currentLesson.videoUrl && (
                  <div className="video-container">
                    <video src={currentLesson.videoUrl} controls />
                  </div>
                )}
                <div className="text-content">
                  {currentLesson.content}
                </div>
              </div>

              {selectedCourse.vrExperience && (
                <div className="vr-section">
                  <button onClick={() => setShowVR(!showVR)}>
                    {showVR ? 'Hide VR Experience' : 'Show VR Experience'}
                  </button>
                  {showVR && (
                    <EnhancedVRExperience
                      baseEnvironmentUrl={selectedCourse.vrExperience.environmentUrl}
                      hotspots={selectedCourse.vrExperience.hotspots.map(h => ({
                        position: new THREE.Vector3(...h.position),
                        title: h.title,
                        description: h.description,
                        audioUrl: h.audioUrl
                      }))}
                      artifacts={selectedCourse.vrExperience.artifacts?.map(a => ({
                        id: a.name,
                        name: a.name,
                        description: '',
                        modelUrl: a.modelUrl,
                        position: new THREE.Vector3(...a.position),
                        scale: new THREE.Vector3(...a.scale),
                        rotation: new THREE.Euler(...a.rotation)
                      }))}
                    />
                  )}
                </div>
              )}

              {currentLesson.quiz && (
                <div className="quiz-section">
                  <h3>Quiz</h3>
                  {currentLesson.quiz.questions.map((question, index) => (
                    <div key={index} className="question">
                      <p>{question.question}</p>
                      <div className="options">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex}>
                            <input
                              type="radio"
                              name={`question-${index}`}
                              checked={quizAnswers[index] === optionIndex}
                              onChange={() => handleQuizAnswer(index, optionIndex)}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={handleQuizSubmit}
                    disabled={
                      Object.keys(quizAnswers).length !==
                      currentLesson.quiz!.questions.length
                    }
                  >
                    Submit Quiz
                  </button>
                </div>
              )}

              <button onClick={handleLessonComplete} className="complete-lesson">
                Complete Lesson
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 