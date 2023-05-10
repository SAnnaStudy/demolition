import React from "react"
import './../styles/popUp.scss'

function PopUp({setOpenPop}){
    return(
        <div className="pop_up" id="pop_up">
            <div className="pop_up_container">
                <div className="pop_up_body" id="pop_up_body">
                    <div className="pop_up_content">
                        <p>Сортировка</p>
                        <form action="" className="form">
                           
                        </form>
                        <div className="pop_up_close" id="pop_up_close" onClick={()=>setOpenPop(false)}>
                            <svg className="pop_up_close_sign" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73641 0.263604C10.0879 0.615076 10.0879 1.18492 9.73641 1.5364L6.273 5L9.73641 8.46362C10.0586 8.7858 10.0854 9.29148 9.81695 9.64424L9.73641 9.73641C9.38494 10.0879 8.81509 10.0879 8.46362 9.73641L5 6.273L1.5364 9.73641C1.18492 10.0879 0.615076 10.0879 0.263604 9.73641C-0.0878679 9.38494 -0.0878679 8.81509 0.263604 8.46362L3.727 5L0.263604 1.5364C-0.0585786 1.21421 -0.0854272 0.708534 0.183058 0.355769L0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L5 3.727L8.46362 0.263604C8.81509 -0.087868 9.38494 -0.087868 9.73641 0.263604Z" fill="#C3C3C6"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp