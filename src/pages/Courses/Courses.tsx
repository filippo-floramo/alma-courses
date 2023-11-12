import { For } from "solid-js"
import { useNavigate } from "@solidjs/router"
import ListItem from "@components/ListItem/ListItem"
import CourseListItem from "@/components/CourseListItem/CourseListItem"
import styles from "./courses.module.scss"

export default function Courses() {

   const navigate = useNavigate()

   const fakeData = [
      {
         courseName: "Italo",
         universities: [
            "Roma",
            "Milano",
            "Torino",
         ],
         fieldOfStudy: "Biologia"
      },
      {
         courseName: "Freccia Rossa",
         universities: [
            "Messina",
            "Enna",
            "Palemo",
         ],
         fieldOfStudy: "Elettronica"
      },
      {
         courseName: "Intercity",
         universities: [
            "Roma",
            "Milano",
            "Cagliari",
         ],
         fieldOfStudy: "Magnetica"
      },
      {
         courseName: "Regionale",
         universities: [
            "Roma",
            "Catania",
            "Torino",
         ],
         fieldOfStudy: "Nucleare"
      },
   ]

   return (
      <div class={styles.courses_container}>
         <For each={fakeData}>
            {(course) => {
               return (
                  <ListItem
                     onItemClick={() => navigate(`/courses/${course.courseName}`)}
                  > 
                     <CourseListItem course={course} />
                  </ListItem>
               )
            }}
         </For>
      </div>
   )
}