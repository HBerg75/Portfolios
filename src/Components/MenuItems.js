import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div>
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    {/* <a href=""></a> */}
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Paragraph</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems
