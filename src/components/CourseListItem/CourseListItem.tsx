import styles from "./course_list_item.module.scss"


interface CourseListItemProps {
   course: {
      courseName: string;
      fieldOfStudy: string;
      universities: string[];
   }
}


export default function CourseListItem({ course }: CourseListItemProps) {

   return (
      <div class={styles.course_item_container}>
         <div class={styles.left_content}>
            <p>
               {course.courseName}
            </p>
            <p>
               Università: {course.universities.join(", ")}
            </p>
         </div>
         <p>
            campo di studi: {course.fieldOfStudy}
         </p>
      </div>
   )
}