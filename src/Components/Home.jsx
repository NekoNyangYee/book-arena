import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/pagination";
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

import recommandBooks from "./recommandBooks";

import './Css/Home.css';

export default function Home() {

    SwiperCore.use([Navigation, Pagination]);

    const recommandbooks = recommandBooks.map((e) => (
        <div className="book-slide-container">
            <SwiperSlide>
                <img
                    src={e.thumbnail}
                    className="home-book-thumbnail"
                />
                <div className="home-book-info">
                    <p><strong>{e.title}</strong></p>
                    <p>{e.sale_price}원</p>
                </div>
            </SwiperSlide>
        </div>
    ))

    return (
        <>
            <div className="swiper-container">
                <Swiper
                    className="swiper-slide"
                    spaceBetween={30}
                    slidesPerView={1}
                    scrollbar={{ draggable: true, dragSize: 24 }}
                    pagination={{ clickable: true }}
                    speed={400}
                >
                    <SwiperSlide>
                        <img src='./img/first-banner.png' className='first-container' />
                        <div className="banner-text-area">
                            <h3>영혼을(?) 갈아넣었습니다ㅎㅎ</h3>
                            <p><strong>큐잉북(QB) 2.0 정식 출시!</strong></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href='https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book'>
                            <img src='./img/second-banner.png' className='first-container' />
                            <div className="banner-text-area">
                                <h3>검색, 어떻게 구현했냐구요?</h3>
                                <p><strong>카카오 디벨로퍼 바로 이곳에서!</strong></p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink to='About'>
                            <img src='./img/third-banner.png' className='first-container' />
                            <div className="banner-text-area">
                                <h3>이 사이트는 무료로 업데이트 해드립니다.</h3>
                                <p><strong>업데이트 내용 보러가기</strong></p>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="first-home-area">
                <h2>이달의 추천책 TOP 10</h2>
                <Swiper
                    className="slide-container"
                    spaceBetween={30}
                    slidesPerView={2}
                    scrollbar={{ draggable: true }}
                    navigation
                    speed={400}
                >
                    {recommandbooks}
                </Swiper>
                <img src="./img/recommand.png" className="recommand-img" />
            </div>
            <div className="second-home-area">
                <img src="./img/device.png" className="adaptive-device-img" />
                <h2>큐잉북(QB)을 이제 모든 디바이스에서 즐겨보세요!</h2>
                <NavLink to='Search'>
                    <div className="goto-Search">
                        <p>여기 누르면 검색창으로 이동합니다<FaSearch /></p>
                    </div>
                </NavLink>
            </div>
        </>
    );
};