import React from 'react';
import './xd_to_react.scss';

function Xd_to_react() {
    return (
        <React.Fragment>
            <div className="center_frame">
                <Header></Header>
                <CardBox></CardBox>
            </div>
        </React.Fragment>
    )
}
export default Xd_to_react;


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="link_logo"><a href="#">
                        <img src={require('./img/Blue.png')} alt="" />
                    </a></li>
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li style={{ flexGrow: 1, textAlign: 'right' }}>
                        <button className="btn_call">Request a Call</button></li>
                    <li><a className="login_link" href="#">Login</a></li>
                </ul>
            </nav>
            <div className="top_content">

                <div className="search_content">
                    <i className="fas fa-search    "></i>  <input placeholder="Search more about our services" type="search" />
                </div>

                <h3>
                    You run your business.
                    We’ll hanle your bookkeeping
            </h3>
                <h4>
                    Get a professional bookkeeper at a fraction of the cost of a
            </h4>
                <a href="" className="trial_link">
                    Start a Free Trial
            </a>
            </div>

        </header>
    )
}
const CardBox = () => {
    const cardBoxObj = [
        {
            id: 1,
            name: "Micro",
            img: require('./img/card1.png'),
            price: 139,
            bill: "$159/m if billed monthly",
            trial: "Try a Free for 7 Days",
            footerContent: "Monthly expenses From $1k to 7.5k",
            style: {
                background: 'linear-gradient(to bottom, #7BA0B5, #fff)'
            }

        },
        {
            id: 2,
            name: "Boutique",
            img: require('./img/Group_82.png'),
            price: 169,
            bill: "$199/m if billed monthly",
            trial: "Try a Free for 7 Days",
            footerContent: "Monthly expenses From $7.5k to 20k",
            style: {
                background: 'linear-gradient(to bottom, #789DB3, #fff)'
            }
        },
        {
            id: 3,
            name: "Ventrue",
            img: require('./img/card3.png'),
            price: 209,
            bill: "$249/m if billed monthly",
            trial: "Try a Free for 7 Days",
            footerContent: "Monthly expenses From $20k to 60k",
            style: {
                background: 'linear-gradient(to bottom, #075FA8, #fff)'
            }
        },
        {
            id: 4,
            name: "Corporate",
            img: require('./img/card4.png'),
            price: 299,
            bill: "$349/m if billed monthly",
            trial: "Try a Free for 7 Days",
            footerContent: "Monthly expenses Up to $1M",
            style: {
                background: 'linear-gradient(to bottom, #0F3C56, #fff)'
            }
        }
    ]
    return (
        <section className="cardSection">
            {
                cardBoxObj.map(val => {
                    return (
                        <div key={val.id} className="cardBox"
                            style={val.style} >
                            <div className="card_img">
                                <img src={val.img} alt={val.img} />
                                <div className="name">
                                    {val.name}
                                </div>
                            </div>
                            <div className="content">
                                <div className="price">
                                    <span>$</span><span>{val.price}/</span><span>m</span>
                                </div>
                                <div className="bill_content">
                                    <span>If billed annually</span> <br />
                                    {val.bill}
                                </div>
                                <a href="#" className="trial_link">
                                    {val.trial}
                                </a>
                                <div className="footer_content">
                                    {val.footerContent}
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </section>
    )
}