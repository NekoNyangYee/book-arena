import list from './list';

import './Css/About.css';

function About() {

    const MyInfo = {
        name: '김태현',
        email: 'kth08122570@gmail.com',
        mygithub: '추후 공개 예정'
    }

    const UpdateList = ({date, version, lists}) => (
        < div className='summary-devinfo' >
            <h2>{date}</h2>
            <h3>{version}</h3>
            <ol>
                <li>{lists}</li>
            </ol>
        </div >
    )

    return (
        <div className='about-page'>
            <h1>정보</h1>
            <img src="./img/Logo-profile.png" alt="BookArena" className='logo-profile' />
            <p>Version: 1.0.0(Beta)</p>
            <p>lastest Update: 2022-09-04</p>
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
                    {list.map((e) => <UpdateList {...e}/>)}
                </details>
            </div>
        </div>
    );
}

export default About; 