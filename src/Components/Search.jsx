import { bookSearch } from '../api';
import { Routes, Route, Router, NavLink, BrowserRouter } from 'react-router-dom'
import React, { useEffect, useState } from "react";

import { FaCog, FaSearch, FaTools } from "react-icons/fa";

import './Css/Search.css';

const Search = props => {

    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState([]);

    const bookSearchHttpHandler = async (query, reset) => {
        const params = {
            query,
            sort: 'accuracy',
            page: 1, //페이지 번호
            size: 50 //한 페이지에 보여질 문서의 갯수
        };

        const { data } = await bookSearch(params); //api 호출
        console.log(data.documents);

        console.log(data.meta)

        if (reset) {
            setResult(data.documents);
        } else {
            setResult(result.concat(data.documents));
        }
    };
    const bookContaniner = result.map((e, i) =>
        <div key={i} className='bookInfo'>
            <a href={e.url}>
                <img src={e.thumbnail} alt={e.title} className='book-thumbnail' />
                <div className='book-title'>
                    {e.title}
                </div>
                <hr />
                <div className='book-price'>
                    <p>정가 : {e.price}원</p>
                    <p>판매상태 : {e.status}</p>
                </div>
            </a>
        </div>
    )
    return (
        <div className="Search-window">
            <div className='searchbox'>
                <input type='search'
                    placeholder='검색할 책을 입력하세요..'
                    name='query'
                    className='input-search'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button onClick={() => bookSearchHttpHandler(searchQuery, 1)}><FaSearch className='search-icon' />검색!</button>
            </div>
            <p className='result-length'>" <strong>{searchQuery}</strong> " 검색 결과, 총 <strong>{result.length}</strong> 개의 책이 있습니다.</p>
            <div className='book-container'>
                {bookContaniner}
            </div>
        </div>
    );
};
export default Search;