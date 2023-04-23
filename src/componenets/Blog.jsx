import React from 'react'
import style from './Blog.module.css';
import img1 from './assets/blogcontent1.png'
import img2 from './assets/Blogcontent2.png'
import img3 from './assets/blogcontent3.png'
import img4 from './assets/blogcontent4.png'
import img5 from './assets/blogcontent5.png'
import img6 from './assets/blogcontent6.png'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';



function Blog() { 
const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <input className={style.input} placeholder='Search' type="text" />
        </div>
        <div className={style.catagories}>
          <h2 className={style.cate}>Categories</h2>
          <p className={style.list_item}>Automation </p>
          <hr />
          <p className={style.list_item}>IoT </p>
          <hr />
          <p className={style.list_item}>Precision Agriculture </p>
          <hr />
          <p className={style.list_item}>Sustainable Farming</p>
          <hr />
          <p className={style.list_item}>Industry News </p>
          <hr />
          <p className={style.list_item}>Case Studies </p>
          <hr />
          <p className={style.list_item}>Tips & Tricks </p>
        </div>
        <div className={style.top_post}>
          <h2 className={style.post_headind}>Top Posts</h2>
          <h4 className={style.post_count}>1<p className={style.top_heading}>How Regenerative Agriculture is Changing the Game</p></h4>
          <h4 className={style.post_count}>2<p className={style.top_heading}>Precision Agriculture 2.0: Using Artificial Intelligence to Optimize Crop Yields</p></h4>
          <h4 className={style.post_count}>3<p className={style.top_heading}>Breaking Ground: How Automation is Revolutionizing the Agriculture Industry</p></h4>
          <h4 className={style.post_count}>4<p className={style.top_heading}>How Ouranos Robotics' Smart Sensors are Transforming Crop Management</p></h4>
          <h4 className={style.post_count}>5<p className={style.top_heading}>The Impact of Technology on the Agriculture Industry</p></h4>
        </div>
      </div>
      <div className={style.card_one}>
        <img src={img1} className={style.img} alt='img1' />
        <div>
          <p className={style.card_info}>Sustainable Farming - April 2023</p>
          <h3 className={style.card_head}>Organic Farming: How It Can Help Save the Planet</h3>
          <p className={style.card_para}>Learn about the benefits of organic farming and how it can help reduce the environmental impact of agriculture.</p>
          <button onClick={()=>{navigate('/blogelement')}} className={style.btn}>Read Full Article</button>
        </div>
      </div>
      <div className={style.card_two}>
        <img src={img2} className={style.img} alt='img1' />
        <div>
          <p className={style.card_info}> IoT - April 2023</p>
          <h3 className={style.card_head}>The Internet of Things and Precision Agriculture: A Match Made in Heaven</h3>
          <p className={style.card_para}>Discover how IoT devices are transforming precision agriculture, from soil moisture sensors to drones.</p>
          <button onClick={()=>{navigate('/blogelement')}} className={style.btn}>Read Full Article</button>
        </div>
      </div>
      <div className={style.card_three}>
        <img src={img3} className={style.img} alt='img1' />
        <div>
          <p className={style.card_info}>Automation - March 2023</p>
          <h3 className={style.card_head}>5 Ways to Optimize Your Crop Yields with Automation</h3>
          <p className={style.card_para}>Find out how automation can increase productivity on the farm, and learn about the latest tools and technologies.</p>
          <button onClick={()=>{navigate('/blogelement')}} className={style.btn}>Read Full Article</button>
        </div>
      </div>
      <div className={style.card_four}>
        <img src={img4} className={style.img} alt='img1' />
        <div>
          <p className={style.card_info}>Sustainable Farming - February 2023</p>
          <h3 className={style.card_head}>The Business Case for Sustainable Farming: Why it Makes Financial Sense</h3>
          <p className={style.card_para}>Explore the economic benefits of sustainable farming practices, from reduced input costs.</p>
          <button onClick={()=>{navigate('/blogelement')}} className={style.btn}>Read Full Article</button>
        </div>
      </div>
      <div className={style.card_five}>
        <img src={img5} className={style.img} alt='img1' />
        <div>
          <p className={style.card_info}>Expert Insights - February 2023</p>
          <h3 className={style.card_head}>Expert Insights: The coming future of Agri-Tech</h3>
          <p className={style.card_para}>Hear from top experts in the field about the latest trends and technologies shaping the future of Agri-tech.</p>
          <button onClick={()=>{navigate('/blogelement')}} className={style.btn}>Read Full Article</button>
        </div>
      </div>
      <div className={style.card_six}>
        <img src={img6} className={style.img} alt='img1' />
        <div>
          <p className={style.card_info}>Expert Insights - February 2023</p>
          <h3 className={style.card_head}>Expert Insights: The coming future of Agri-Tech</h3>
          <p className={style.card_para}>Hear from top experts in the field about the latest trends and technologies shaping the future of Agri-tech.</p>
          <button onClick={()=>{navigate('/blogelement')}} className={style.btn}>Read Full Article</button>
        </div>
      </div>
      <div className={style.page_btn}>
        <div className={style.pagination_btn}> <a href='/blog' className={style.page_btn_Item}>1</a></div>
        <div className={style.pagination_btn}> <a href='/blog' className={style.page_btn_Item}>2</a></div>
        <div className={style.pagination_btn}><a href='/blog' className={style.page_btn_Item}>3</a></div>
        <div className={style.pagination_btn}> <a href='/blog' className={style.page_btn_Item}>4</a></div>
        <div className={style.pagination_btn}> <p><i className={style.page_btn_Item1}></i></p></div>
      </div>

    </>
  )
}

export default Blog
