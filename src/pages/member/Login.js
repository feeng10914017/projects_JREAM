import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginG from './components/Login-G'
// import PropTypes from 'prop-types'
import './login.scss'

//

//
function Login(props) {
  const { setIsAuth, setAuth } = props
  const history = useHistory()
  const [member, setMember] = useState([])
  const [memberEmail, setMemberEmail] = useState('')
  const [password, setPassword] = useState('')

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      event.stopPropagation()
      getMember()
    }
    setValidated(true)
  }

  async function getMember() {
    try {
      const response = await fetch('http://localhost:5555/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberEmail, password }),
      })
      console.log('email?', memberEmail)
      if (response.ok) {
        const data = await response.json()
        console.log('WHO', data)
        if (data) {
          setMember(data)
          console.log('member', member)
          console.log('data', data)
          localStorage.setItem('userName', 'id')
          // localStorage.setItem('userId', data.member)
          localStorage.setItem('userData', JSON.stringify(data))
          // setAuth(true)
        } else {
          console.log('error')
        }
      }
    } catch (err) {
      // alert('無法辨識資料')
      console.log(err)
    }
  }
  useEffect(() => {
    if (localStorage.getItem('userData')) {
      // alert('登入成功')
      history.push('/member')
    } else {
      console.log('請重新輸入')
      console.log('RE')
    }
  }, [member])
  // console.log(member)
  useEffect(() => {
    document.querySelector('.img__btn').addEventListener('click', () => {
      document.querySelector('.cont').classList.toggle('s--signup')
    })
  })

  return (
    <>
      <div className="cont">
        <form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="form sign-in A-label">
            <h2 className="AL-h2">Welcome back,</h2>
            <label>
              <span>Email</span>
              <input
                type="email"
                className="LI-input"
                onChange={(e) => setMemberEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                className="LI-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            {/* <Link to="./Member"> */}
            <button
              type="submit"
              className="submit A-Btn Login-button"
              // onClick={() => {
              //   getMember()
              // }}
              onClick={() => {
                if (member === true) {
                  // getMember()
                  // console.log('member', member)
                  // history.push('/member')
                  setIsAuth(true)
                }
              }}
            >
              Sign In
            </button>
            <LoginG />
            {/* <LogoutG /> */}
            {/* <button type="button" className="fb-btn A-Btn Login-button">
            Connect with <span>facebook</span>
          </button> */}

            <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
          </div>
        </form>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2 className="AL-h2-2">New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2 className="AL-h2-2">One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up A-label">
            <h2 className="AL-h2">Time to feel like home,</h2>
            <label>
              <span>Name</span>
              <input type="text" className="LI-input" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" className="LI-input" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" className="LI-input" />
            </label>
            <button type="button" className="submit A-Btn Login-button">
              Sign Up
            </button>
            {/* <LoginG /> */}
            {/* <button type="button" className="fb-btn A-Btn Login-button">
              Join with <span>facebook</span>
            </button> */}
          </div>
        </div>
      </div>
    </>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// }

export default Login
