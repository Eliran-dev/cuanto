import React, { useEffect, useState } from 'react'
import { styled } from '../styles/stitches.config'
import Image from 'next/image';
import appleTop from '../public/apple.jpg';
import Navbar from '../components/navbar';
import Spinner from '../styles/Spinner';
// import ReactExport from "react-export-excel";

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Container = styled('div', {
    width: '100%',
    height: '100vh'
})

const CategoryDiv = styled('div', {
    width: '100px',
    height: '100px',
})

const CategoryH1 = styled('h1', {
    textAlign: 'center',
    margin: 'auto'
})

const ItemDiv = styled('div', {
    broder: '1px solid',
    padding: '10px',
    boxShadow: '5px 10px 18px #888888',
    textAlign: 'right'

})


const cat = ["Laptops"];

const data = [{ "_id": { "$oid": "6217cbfc9037086f241a7ca7" }, "title": "מחשב נייד Lenovo IdeaPad 3-14ITL 82H7005WIV - צבע Sand ", "category": "Laptops", "IvoryUid": { "$numberInt": "0" }, "KspUid": { "$numberInt": "148428" }, "kspSql": { "$numberInt": "147219" }, "priceKsp": { "$numberInt": "1740" }, "branches": { "$numberInt": "0" }, "approvalStatus": "Pending", "date": { "$date": { "$numberLong": "1645726716215" } }, "brand": "Lenovo", "kspStock": [{ "name": "אילת הטיילת", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47838" } }, { "name": "אילת לגונה קראון פלזה", "qnt": { "$numberInt": "1" }, "_id": { "$oid": "6217e556a908f74281d47839" } }, { "name": "אילת מרכז התיירות", "qnt": { "$numberInt": "1" }, "_id": { "$oid": "6217e556a908f74281d4783a" } }, { "name": "אילת תרשיש", "qnt": { "$numberInt": "1" }, "_id": { "$oid": "6217e556a908f74281d4783b" } }, { "name": "אשדוד מרכז", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4783c" } }, { "name": "אשדוד עד הלום", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4783d" } }, { "name": "אשקלון", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4783e" } }, { "name": "באר שבע מזרח", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4783f" } }, { "name": "באר שבע שאול המלך", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47840" } }, { "name": "בילו רחובות ק.עקרון", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47841" } }, { "name": "בית שמש", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47842" } }, { "name": "הרצליה מרכז", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47843" } }, { "name": "הרצליה פיתוח", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47844" } }, { "name": "חדרה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47845" } }, { "name": "חולון", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47846" } }, { "name": "חיפה מת\"מ", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47847" } }, { "name": "חיפה סטלה מאריס", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47848" } }, { "name": "חיפה רוממה", "qnt": { "$numberInt": "1" }, "_id": { "$oid": "6217e556a908f74281d47849" } }, { "name": "טבריה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4784a" } }, { "name": "יבנה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4784b" } }, { "name": "ירושלים הר חוצבים", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4784c" } }, { "name": "ירושלים קינג ג'ורג'", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4784d" } }, { "name": "ירושלים תלפיות", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4784e" } }, { "name": "כפר סבא הירוקה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4784f" } }, { "name": "כפר סבא התעש", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47850" } }, { "name": "כרמיאל", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47851" } }, { "name": "מודיעין", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47852" } }, { "name": "משלוח", "qnt": { "$numberInt": "14" }, "_id": { "$oid": "6217e556a908f74281d47853" } }, { "name": "נהריה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47854" } }, { "name": "נוף הגליל (נצרת עילית)", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47855" } }, { "name": "נשר", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47856" } }, { "name": "נתיבות", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47857" } }, { "name": "נתניה אזה'ת פולג", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47858" } }, { "name": "נתניה קניון השרון", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47859" } }, { "name": "נתניה שכונת קריית שרון", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4785a" } }, { "name": "עפולה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4785b" } }, { "name": "פתח תקווה ד.רבין", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4785c" } }, { "name": "פתח תקווה סגולה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4785d" } }, { "name": "צומת ק.אתא", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4785e" } }, { "name": "קריון ק.ביאליק", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4785f" } }, { "name": "קרית אונו", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47860" } }, { "name": "קרית גת", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47861" } }, { "name": "קרית חיים", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47862" } }, { "name": "ראש העין", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47863" } }, { "name": "ראשון לציון מרכז", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47864" } }, { "name": "ראשון לציון רוזנסקי", "qnt": { "$numberInt": "1" }, "_id": { "$oid": "6217e556a908f74281d47865" } }, { "name": "רחובות", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47866" } }, { "name": "רמלה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47867" } }, { "name": "רמת אביב", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47868" } }, { "name": "רמת גן", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47869" } }, { "name": "רמת השרון", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4786a" } }, { "name": "רעננה", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4786b" } }, { "name": "תל אביב דיזינגוף", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4786c" } }, { "name": "תל אביב החשמונאים", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4786d" } }, { "name": "תל אביב המסגר", "qnt": { "$numberInt": "1" }, "_id": { "$oid": "6217e556a908f74281d4786e" } }, { "name": "תל אביב רמת החייל", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d4786f" } }, { "name": "תל ברוך", "qnt": { "$numberInt": "0" }, "_id": { "$oid": "6217e556a908f74281d47870" } }], "updatedAt": { "$date": { "$numberLong": "1645733206355" } } }]


const Stock = (props: any) => {
    const [input, setInput] = useState('');
    const [show, setShow] = useState<Boolean>(false);

    const eilatStock = (arr: any) => {
        let eilat: number  = 0;
        let obj: any= Object.values(arr)
        for(let i=0; i < 4; i++)
        {
            console.log(Number(obj[i].qnt))
            eilat+= (Number(obj[i].qnt))
            console.log(eilat  +"EIALT")
            console.log(obj[i].name)
        }
        return eilat;

    }

    const OverallBranches = (arr: any) => {
        let overallSum: number  = 0;
        let obj: any= Object.values(arr)
        for(let i=4; i < obj.length; i++)
        {
            if(i != 27)
            {
            console.log(Number(obj[i].qnt))
            overallSum+= (Number(obj[i].qnt))
            console.log(overallSum  +"EIALT")
            console.log(obj[i].name)
            }
        }
        return overallSum;
    }
    useEffect(() => {

    }, [])
    return (
        <>
        {/* {
            props.stock == "Loading" &&
            <Spinner></Spinner>
        } */}

        {
        props.stock != "Loading"&&        
        (props.stock)?.map((item:any, i:number) => (
            <ItemDiv
            key={i}
            >
            <h1>{item.result.data.name}</h1>
            <h1>{` ₪${ item.result.data.price}`}</h1>
            <h2>מלאי :{item.result.stock[28].qnt}</h2>
            <h2> מלאי סניפים :{OverallBranches(item.result.stock)}</h2>

            <h2> מלאי אילת: {eilatStock(item.result.stock)}</h2>

            </ItemDiv>
        ))}


            {/* <Navbar
                label="Search stock"
                value={input}
                onChange={setInput}
                setStock={setStock}
            />
            <h1>{input}</h1>
            <Container>
                {
                    cat.map((category, i) => (

                        <CategoryDiv
                        key={i}>
                            <Image src={appleTop} layout={"fixed"} width={300} height={300} />
                            <CategoryH1>
                                {category}
                            </CategoryH1>

                        </CategoryDiv>
                    ))
                }

            </Container>
            {
show &&
                <h1>{stock.result.data.uinsql}</h1>
            } */}

        </>

    )
}

export default Stock