import React from 'react'
/* import full01 from '../assets/img/gallery/fulls/01.jpg'
import full02 from '../assets/img/gallery/fulls/02.jpg'
import full03 from '../assets/img/gallery/fulls/03.jpg'
import full04 from '../assets/img/gallery/fulls/04.jpg'
import full05 from '../assets/img/gallery/fulls/05.jpg'
import full06 from '../assets/img/gallery/fulls/06.jpg'
import full07 from '../assets/img/gallery/fulls/07.jpg'
import full08 from '../assets/img/gallery/fulls/08.jpg'
import full09 from '../assets/img/gallery/fulls/09.jpg'
import full10 from '../assets/img/gallery/fulls/10.jpg'
import thumb01 from '../assets/img/gallery/thumbs/01.jpg'
import thumb02 from '../assets/img/gallery/thumbs/02.jpg'
import thumb03 from '../assets/img/gallery/thumbs/03.jpg'
import thumb04 from '../assets/img/gallery/thumbs/04.jpg'
import thumb05 from '../assets/img/gallery/thumbs/05.jpg'
import thumb06 from '../assets/img/gallery/thumbs/06.jpg'
import thumb07 from '../assets/img/gallery/thumbs/07.jpg'
import thumb08 from '../assets/img/gallery/thumbs/08.jpg'
import thumb09 from '../assets/img/gallery/thumbs/09.jpg'
import thumb10 from '../assets/img/gallery/thumbs/10.jpg'
import pic01 from '../assets/img/pic01.jpg'
import pic02 from '../assets/img/pic02.jpg' */
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

/* const images01 = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
]

const images02 = [
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '7',
    source: full07,
    thumbnail: thumb07,
    caption: 'Photo 7',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
]

const images03 = [
  {
    id: '8',
    source: full08,
    thumbnail: thumb08,
    caption: 'Photo 8',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '9',
    source: full09,
    thumbnail: thumb09,
    caption: 'Photo 9',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '10',
    source: full10,
    thumbnail: thumb10,
    caption: 'Photo 10',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
] */

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <header>
        <h1>William Breiler</h1>
        <p>
          Student, Front-End Web Developer, Streamer
        </p>
      </header>
    </section>
    <section>
      <header>
        <h2>About Me</h2>
      </header>
      <div className="content">
        {/* <p>
          I am a student, front-end web developer, and part-time streamer that's familiar with GatsbyJS.
        </p> */}
        <ul className="feature-icons">
          <li className="icon solid fa-laptop">Linux, Windows 10, MacOS</li>
          {/* <li className="icon solid fa-bolt">.</li>
          <li className="icon solid fa-signal">.</li> */}
          <li className="icon solid fa-cog">.</li>
          <li className="icon solid fa-map-marker-alt">Greater Metro-Nashville, TN</li>
          <li className="icon solid fa-code">Familiar with JavaScript (GatsbyJS), learning Go</li>
        </ul>
      </div>
    </section>
    <section>
      <header>
        <h2>Past and Current Projects</h2>
      </header>
      <div className="content">
        <p>
         Below are some projects I'm currently working on or have worked on in the past, as well as who they've been for.
        </p>
        <section>
          <header>
            <h3>Code for Nashville</h3>
            <p>
              Some projects I'm working on for Code for Nashville include [], [], and []. You can find out more about them <a href="https://www.codefornashville.org/#about">here</a>.
            </p>
          </header>
          <div className="content">
            <Gallery
              /* images={images01.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                })
              )} */
            />
          </div>
        </section>
        <section>
          <header>
            <h3>Nashville Sea Cadets</h3>
            <p>
              Nashville Sea Cadets required a website redesign, and the images to the right show the before and after of the redesign. You can see the finished website <a href="https://example.com" rel="noreferrer">here</a>.
            </p>
          </header>
          <div className="content">
            <Gallery
              /* images={images02.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                })
              )} */
            />
          </div>
        </section>
      </div>
    </section>
    <section>
      <header>
        <h2>Get in touch</h2>
      </header>
      <footer>
        <ul className="items">
          <li>
            <h3>Email</h3>
            <a href="mailto:will.breiler@gmail.com">will.breiler@gmail.com</a>
          </li>
          <li>
            <h3>Phone</h3>
            <a href="tel:+16153980874">+1(615).398.0874</a>
          </li>
          <li>
            <h3>Address</h3>
            <span>Greater Metro-Nashville, TN</span>
          </li>
          <li>
            <h3>Everywhere Else</h3>
            <ul className="icons">
              <li>
                <a href="https://www.twitter.com/wbreiler" className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.github.com/wbreiler" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.gitlab.com/wbreiler" className="icon brands fa-gitlab">
                  <span className="label">GitLab</span>
                </a>
              </li>
              <li>
                <a href="https://www.twitch.tv/resistfutil" className="icon brands fa-twitch">
                  <span className="label">Twitch</span>
                </a>
              </li>
              <li>
                <a href="https://www.snapchat.com/add/wbreiler8" className="icon brands fa-snapchat-ghost">
                  <span className="label">Snapchat</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/will_breiler" className="icon brands fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/wbreiler" className="icon brands fa-telegram-plane">
                  <span className="label">Telegram</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </section>
    <div className="copyright">
      &copy; William Breiler. All rights reserved. Written in <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">GatsbyJS</a>. (You can learn more about them <a href="https://gatsbyjs.com/about" target="_blank" rel="noreferrer">here</a>.) Theme by <a href="https://html5up.net/" rel="noreferrer">HTML5 UP</a>
    </div>
  </Layout>
)

export default IndexPage
