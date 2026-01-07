import { Course } from "./types";

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Data Structures & Algorithms',
    category: 'Long Term',
    duration: '6 Months',
    description: 'Master the foundations of Computer Science. Essential for product-based company interviews.',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    title: 'Full Stack Web Dev',
    category: 'Placement',
    duration: '4 Months',
    description: 'Zero to Hero in MERN Stack. Build real-world projects and get placement ready.',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    title: 'System Design 101',
    category: 'Crash Course',
    duration: '2 Weeks',
    description: 'Learn how to scale applications to millions of users. For senior engineering roles.',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: '4',
    title: 'Interview Bootcamp',
    category: 'Placement',
    duration: '1 Month',
    description: 'Mock interviews, resume reviews, and behavioral training.',
    image: 'https://picsum.photos/400/300?random=4'
  }
];

export const NAV_LINKS = [
  { name: 'Courses', href: '#courses' },
  { name: 'Instructors', href: '#instructors' },
  { name: 'Community', href: '#community' },
];