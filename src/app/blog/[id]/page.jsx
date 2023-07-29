import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if(!res.ok) {
    return notFound()
  }

  return res.json()
}


const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, explicabo magni. Dicta cupiditate ipsa nesciunt culpa commodi amet quisquam maxime eveniet, necessitatibus consequatur? Esse officiis quam iusto illo, deserunt consequatur.
          </p>
          <div className={styles.author}>
            <Image 
              src="https://images.pexels.com/photos/17652679/pexels-photo-17652679/free-photo-of-color.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image 
              src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
                fill={true}
                className={styles.image}
              />
          </div>
      </div> 
        <div className={styles.content}>
          <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At necessitatibus consectetur ipsum laudantium quod nostrum, quasi fugit obcaecati non repudiandae voluptatum exercitationem cumque doloribus illum ad odio architecto tempora rerum.
          <br />
          <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat hic porro explicabo! Assumenda ratione, enim ut asperiores at itaque saepe optio vitae qui aspernatur deleniti illo officiis beatae placeat?
          <br />
          <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse ipsam, ab doloribus magni quod quibusdam corporis laborum ad itaque nostrum et consequatur eos. Dolore quae facere quod fugiat nulla maiores enim veritatis voluptatibus rerum quos, tempore, laboriosam dignissimos vero esse? Hic quaerat assumenda iusto. Explicabo molestias magnam, nulla voluptates aperiam a sed reprehenderit quos beatae minus deserunt laborum necessitatibus itaque quod doloribus? Harum id libero iusto voluptatum vitae, enim quod voluptatibus ipsam maxime, consectetur autem, consequatur quo? Similique voluptatum rerum, dolorum maxime, nesciunt cumque nam numquam sapiente, ullam quisquam recusandae praesentium. Doloremque incidunt tempore eius! Culpa id magnam aspernatur.
          </p>
        </div>
    </div>
  )
}

export default BlogPost