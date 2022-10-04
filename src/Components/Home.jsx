import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/pagination";
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

import recommandBooks from "./recommandBooks";
import categoryBooks from "./category_books";
import categoryBooks2 from "./category_books2";

import './Css/Home.css';

export default function Home() {

    SwiperCore.use([Navigation, Pagination, Autoplay]);

    const recommandbooks = recommandBooks.map((e) => (
        <div className="book-slide-container">
            <SwiperSlide>
                <a href={e.url}>
                    <img
                        src={e.thumbnail}
                        className="home-book-thumbnail"
                    />
                    <div className="home-book-info">
                        <p><strong>{e.title}</strong></p>
                        <p>{e.sale_price}원</p>
                    </div>
                </a>
            </SwiperSlide>

        </div>
    ));

    return (
        <>
            <div className="swiper-container">
                <Swiper
                    className="banner-area"
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    scrollbar={{ draggable: true, dragSize: 24 }}
                    pagination={{ clickable: true }}
                    speed={200}
                    loop={true}
                >
                    <SwiperSlide>
                        <img src='./img/first-banner.png' className='first-container' />
                        <div className="banner-text-area">
                            <h3>다시 다듬었습니다..</h3>
                            <p><strong>큐잉북(QB) 2.5 출시!</strong></p>
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
                <div className="recommand-books-top10">
                    <img src="./img/recommand.png" className="recommand-img" />
                    <h2>이달의 추천책 TOP 10</h2>
                </div>
                <Swiper
                    className="slide-container"
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                    speed={200}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 8,
                        }
                    }}
                >
                    <div className="category-container">
                        {recommandbooks}
                    </div>
                </Swiper>
                <h2><MdCategory 
                style={{
                    position: 'relative',
                    top: '4px',
                    marginRight: '7px'
                }}
                />카테고리별 시리즈</h2>
                <Swiper
                    className="category-slider-contents"
                    spaceBetween={110}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    speed={200}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        769: {
                            slidesPerView: 2,
                        },
                        800: {
                            slidesPerView: 1,
                        },
                        1100: {
                            slidesPerView: 2,
                        }
                    }}

                >
                    <SwiperSlide>
            <div className="category-container">
                <h2># 앙투안 볼로딘 선집(워크룸 프레스)</h2>
                <Swiper
                    className="category-banner-area"
                    direction={'vertical'}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    scrollbar={{ draggable: true, dragSize: 24 }}
                    speed={200}
                >
                    <SwiperSlide>
                        <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5383112%3Ftimestamp%3D20220930204155" className="category-img" />
                        <h2>메블리도의 꿈</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F3782160%3Ftimestamp%3D20220929015636" className="category-img" />
                        <h2>미미한 천사들</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="category-container">
                <h2># 앨리스 먼로 컬렉션(웅진지식하우스)</h2>
                <Swiper
                    className="category-banner-area"
                    direction={'vertical'}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    scrollbar={{ draggable: true, dragSize: 24 }}
                    speed={200}
                >
                    <SwiperSlide>
                        <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F346183%3Ftimestamp%3D20220723202259" className="category-img" />
                        <h2>미움, 우정, 구애, 사랑, 결혼</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5368950%3Ftimestamp%3D20220930213857" className="category-img" />
                        <h2>런어웨이</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F348287%3Ftimestamp%3D20220829113050" className="category-img" />
                        <h2>행복한 그림자의 춤</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="category-container">
                <h2># 황석영 중단편전집(문학동네)</h2>
                <Swiper
                    className="category-banner-area"
                    direction={'vertical'}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    scrollbar={{ draggable: true, dragSize: 24 }}
                    speed={200}
                >
                    <SwiperSlide>
                    <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5371275%3Ftimestamp%3D20221004000958" className="category-img" />
                        <h2>객지</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5371301%3Ftimestamp%3D20221003231724" className="category-img" />
                        <h2>한씨연대기</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5371223%3Ftimestamp%3D20221004005134" className="category-img" />
                        <h2>삼포 가는 길</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5371268%3Ftimestamp%3D20221003234536" className="category-img" />
                        <h2>만각 스님</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </SwiperSlide>
                </Swiper>
            </div>
            <div className="second-home-area">
                <img src="./img/device.png" className="adaptive-device-img" />
                <h2>큐잉북(QB)을 이제 모든 디바이스에서 즐겨보세요!</h2>
            </div>
        </>
    );
};