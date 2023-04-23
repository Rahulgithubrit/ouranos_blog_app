import React, { useState } from 'react'
import stylee from './Blogelement.module.css';
import { MdOutlineCopyAll } from 'react-icons/md'
import { BsTwitter, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import img from './assets/blogcontent1.png'
import { useNavigate } from 'react-router-dom';

export default function Blogelement() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, comment }
    if (name && comment) {
      setList((ls) => [...ls, data])
      setName("");
      setComment("");
    }
  }

  return (
    <>
      <div className={stylee.nav}>
        <div onClick={() => { navigate(-1) }} className={stylee.arrow}></div>
        <div className={stylee.copyicon}><MdOutlineCopyAll className={stylee.icon} /> Copy Link</div>
        <div className={stylee.icons}><BsTwitter /></div>
        <div className={stylee.icons}><BsFacebook /></div>
        <div className={stylee.icons}><SiLinkedin /></div>
        <div className={stylee.icons}><BsWhatsapp /></div>
      </div>
      <img className={stylee.img} src={img} alt='img' />
      <h1 className={stylee.H_one}>Organic Farming: How It Can Help Save the Planet</h1>
      <h6 className={stylee.H_six}>Sustainable Farming - April 2023</h6>
      <p className={stylee.para}>Organic farming is a method of agriculture that avoids the use of synthetic fertilizers, pesticides, and other harmful chemicals. Instead, it relies on natural methods of pest control and soil management, such as crop rotation, cover crops, and composting. Organic farming has gained popularity in recent years due to concerns about the impact of conventional agriculture on the environment, human health, and animal welfare. In this blog post, we'll explore how organic farming can help save the planet and why it's important to support this sustainable method of agriculture.</p>

      <h5 className={stylee.H_five}>Reducing Environmental Impact</h5>
      <p className={stylee.para}> One of the main benefits of organic farming is its reduced environmental impact. Conventional agriculture relies heavily on synthetic fertilizers, pesticides, and herbicides, which can have harmful effects on soil health, water quality, and biodiversity. Organic farming, on the other hand, focuses on building healthy soil ecosystems that can support diverse plant and animal life. By avoiding synthetic chemicals and prioritizing soil health, organic farming can reduce greenhouse gas emissions, promote biodiversity, and protect natural resources such as water and air.</p>

      <h5 className={stylee.H_five}>Supporting Local Economies</h5>
      <p className={stylee.para}> In addition to its environmental benefits, organic farming can also support local economies by promoting sustainable agriculture practices and creating jobs in rural communities. Organic farms tend to be smaller and more diverse than conventional farms, which can provide opportunities for local farmers to grow a wide range of crops and sell them directly to consumers. This can help to build a more resilient and sustainable food system, reduce food waste, and support local economies.</p>

      <h5 className={stylee.H_five}>Promoting Health and Wellness</h5>
      <p className={stylee.para}> Organic farming also promotes health and wellness by providing consumers with access to fresh, healthy food that's free of harmful chemicals and synthetic additives. Research has shown that organic produce may contain higher levels of certain nutrients, such as antioxidants and vitamin C, than conventionally grown produce. Additionally, by avoiding the use of synthetic pesticides and herbicides, organic farming can reduce exposure to harmful chemicals that have been linked to a range of health problems, including cancer, neurotoxicity, and reproductive disorders.</p>

      <h5 className={stylee.H_five}>Challenges and Opportunities</h5>
      <p className={stylee.para}>  While organic farming has many benefits, it also faces a number of challenges and opportunities. One of the biggest challenges is the higher cost of organic produce compared to conventionally grown produce. This can make it difficult for some consumers to afford organic food, especially in areas where access to healthy food is limited. Additionally, organic farming requires more labor and management than conventional farming, which can make it challenging for farmers to transition to this method.

        Despite these challenges, organic farming presents many opportunities for farmers, consumers, and the planet. By supporting organic agriculture through our food choices and advocacy efforts, we can help to build a more sustainable and equitable food system that promotes health, wellness, and environmental stewardship.</p >
      <h2 className={stylee.comment}>Comments</h2>
      <div className={stylee.inputcomment}>
        <form onSubmit={handleSubmit} className={stylee.form}>
          <input className={stylee.input} name='name' value={name} placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
          <input className={stylee.input} name='comment' value={comment} placeholder='Write Comments' onChange={(e) => { setComment(e.target.value) }} />
          <button className={stylee.butn}>Post</button>
        </form>
      </div>
      {list.map((element) => {
        return <div className={stylee.comment_items}>
          <div className={stylee.name}>{element.name}</div>
          <div className={stylee.comments}>{element.comment}</div>
        </div>
      })}
    </>
  )
}
