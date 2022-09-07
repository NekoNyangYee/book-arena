import list from './list';

import './Css/About.css';

function About() {

    const MyInfo = {
        name: '김태현',
        email: 'kth08122570@gmail.com',
        mygithub: 'https://github.com/NekoNyangYee/book-arena.git'
    }

    const UpdateList = list.map((el, i) => (
        < div className='summary-devinfo' >
            <h2>{el.date}</h2>
            <h3>{el.version}</h3>
            <ol>
                {el.lists.map((k) => (
                    <li>{k}</li>
                ))}
            </ol>
        </div >
    ))

    return (
        <div className='about-page'>
            <h1>정보</h1>
            <img src="./img/Logo-profile.png" alt="BookArena" className='logo-profile' />
            <p>Version: 1.2.2 (Beta)</p>
            <p>lastest Update: 2022-09-07</p>
            <h4>개발 정보</h4>
            <div className='dev-info'>
                <details>
                    <summary>
                        <p>개발도구 & 공식문서 바로가기</p>
                    </summary>
                    <div className='summary-devinfo'>
                        <p>프레임워크 : <a href='https://ko.reactjs.org/'><img src='./img/React-logo.png' className='react-logo' /></a></p>
                        <p>API : <a href='https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book'><img src='./img/kakaodev_logo.png' className='kakaodev-logo' /></a></p>
                    </div>
                </details>
                <details>
                    <summary>
                        <p>개발자 정보</p>
                    </summary>
                    <div className='summary-devinfo'>
                        <p>이름: {MyInfo.name}</p>
                        <p>이메일 : {MyInfo.email}</p>
                        <p>깃허브 주소: {MyInfo.mygithub}</p>
                    </div>
                </details>
                <details>
                    <summary>
                        <p>업데이트 내용</p>
                    </summary>
                    {UpdateList}
                </details>
            </div>
            <h4>개발자 포트폴리오</h4>
            <a href='https://planning-note.vercel.app/'>
                <div className='my-portfolio'>
                    <p>Planning Note</p>
                </div>
            </a>
            <a href='https://nekonyangyee.github.io/Univ.barogagi/Univ_Barogagi.html'>
                <div className='my-portfolio'>
                    <p>대학 바로가기</p>
                </div>
            </a>
        </div>
    );
}

export default About; 