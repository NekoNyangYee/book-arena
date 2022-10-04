import list from './list';

import { FaTools, FaListUl } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdUpdate, MdOutgoingMail,MdSystemSecurityUpdateGood } from "react-icons/md";
import { RiDeviceFill } from "react-icons/ri";

import './Css/About.css';

function About() {

    const MyInfo = {
        name: '김태현',
        email: 'kth08122570@gmail.com',
        mygithub: 'https://github.com/NekoNyangYee/book-arena.git'
    }

    const UpdateList = list.map((el, i) => (
        < div className='summary-devinfo'>
            <h2>{el.date}</h2>
            <h3>{el.version}</h3>
            <div className='list-container'>
                <ol>
                    {el.lists.map((k) => (
                        <li>{k}</li>
                    ))}
                </ol>
            </div>
        </div >
    ))

    return (
        <div className='about-page'>
            <div className='left-info'>
                <img src="./img/Logo-profile.png" alt="BookArena" className='logo-profile' />
                <div className='version-update-info'>
                    <p><MdSystemSecurityUpdateGood fontSize={20}
                    style={{
                        position: 'relative',
                        top: '4px',
                        marginRight: '7px'
                    }} />버전: 2.5.0</p>
                    <p><MdUpdate fontSize={20}
                        style={{
                            position: 'relative',
                            top: '4px',
                            marginRight: '7px'
                        }}
                    />
                        최근 업데이트: 2022-10-04</p>
                        <p><RiDeviceFill fontSize={20}
                        style={{
                            position: 'relative',
                            top: '4px',
                            marginRight: '7px'
                        }}/>Qing UI 버전: 2.5</p>
                </div>
                <h4>개발자 포트폴리오</h4>
                <div className='my-portfolio'>
                    <a href='https://planning-note.vercel.app/'>
                        <p><img src='./img/planning-note-logo.png' className='planning-note-logo' />Planning Note</p>
                    </a>
                </div>
                <h4>문의하기</h4>
                <div className='my-portfolio'>
                    <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMTthkNfRRbRkpwvDLzHHQfTKkGmQNHcWRVwTWVvBLlSHQLqHbMkkvTsprqGXgBTvWZlJvf'>
                        <p style={{
                            position: 'relative',
                            top: '2px',
                            left: '7px'
                        }}><MdOutgoingMail fontSize={25} className='dev-info-icon' 
                         />Gmail로 문의하기(PC 전용)</p>
                    </a>
                </div>
            </div>
            <div className='right-info'>
                <h4>개발 정보</h4>
                <div className='dev-info'>
                    <details open>
                        <summary>
                            <p><FaTools fontSize={19} className='dev-info-icon' />개발도구 & 공식문서 바로가기</p>
                        </summary>
                        <div className='summary-devinfo'>
                            <p>프레임워크 : <a href='https://ko.reactjs.org/'><img src='./img/React-logo.png' className='react-logo' /></a></p>
                            <p>API : <a href='https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book'><img src='./img/kakaodev_logo.png' className='kakaodev-logo' /></a></p>
                        </div>
                    </details>
                    <details open>
                        <summary>
                            <p><HiInformationCircle fontSize={19} className='dev-info-icon' />개발자 정보</p>
                        </summary>
                        <div className='summary-devinfo'>
                            <p>이름: {MyInfo.name}</p>
                            <p>이메일 : {MyInfo.email}</p>
                            <p>깃허브 주소: <a href='https://github.com/NekoNyangYee/book-arena.git'>{MyInfo.mygithub}</a></p>
                        </div>
                    </details>
                    <details open>
                        <summary>
                            <p><FaListUl fontSize={19} className='dev-info-icon'/>업데이트 내용</p>
                        </summary>
                        {UpdateList}
                    </details>
                </div>
            </div>
        </div>
    );
}

export default About; 