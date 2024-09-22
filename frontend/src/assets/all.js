import menu_ts from '../assets/image_nenu/menuts.jpg'
import menu_banhngot from '../assets/image_nenu/menubanhngot.jpg'
import menu_banhcuon from '../assets/image_nenu/menubanhcvuon.jpg'
import menu_hamberger from '../assets/image_nenu/menuhbg.jpg'
import menu_pizza from '../assets/image_nenu/menupizza.jpg'
import menu_cream from '../assets/image_nenu/menucream.jpg'
import menu_nuoc from '../assets/image_nenu/nuocgiaikhat.jpg'

//product
import ts1 from '../assets/products/ts1.jpg'
import ts2 from '../assets/products/ts2.jpg'
import ts3 from '../assets/products/ts3.png'
import ts4 from '../assets/products/ts4.jpg'
import ts5 from '../assets/products/ts5.jpg'
import pz1 from '../assets/products/pz1.png'
import pz2 from '../assets/products/pz2.jpg'
import pz3 from '../assets/products/pz3.jpg'
import bn1 from '../assets/products/bn1.jpg'
import bn2 from '../assets/products/bn2.jpg'


export const menu_list = [
    {
        menu_name: "Trà sữa",
        menu_image: menu_ts
    },
    {
        menu_name: "Bánh ngọt",
        menu_image: menu_banhngot
    },
    {
        menu_name: "Bánh cuốn",
        menu_image: menu_banhcuon
    },
    {
        menu_name: "Hamberger",
        menu_image: menu_hamberger
    },
    {
        menu_name: "Pizza",
        menu_image: menu_pizza
    },
    {
        menu_name: "Kem",
        menu_image: menu_cream
    },
    {
        menu_name: "Nước giải khát",
        menu_image: menu_nuoc
    },
]

export const food_list = [
    {
        _id: "1",
        name: "Trà sữa kem trứng cháy",
        image: ts1,
        price: 32000,
        description: "Thơm, ngon, béo vị trứng",
        category: "Trà sữa"
    },
    {
        _id: "2",
        name: "Sữa tươi trân châu đường hổ khổng lồ",
        image: ts2,
        price: 35000,
        description: "Siêu to khổng lồ",
        category: "Trà sữa"
    },
    {
        _id: "3",
        name: "Trà sữa phô mai tươi",
        image: ts3,
        price: 25000,
        description: "Béo vị phô mai",
        category: "Trà sữa" 
    },
    {
        _id: "4",
        name: "Trà sữa trân châu hoàng gia",
        image: ts4,
        price: 25000,
        description: "Uống là thấy sang",
        category: "Trà sữa" 
    },
    {
        _id: "5",
        name: "Trà sữa socola",
        image: ts5,
        price: 25000,
        description: "Thơm ngon mùi lễ tình nhân",
        category: "Trà sữa" 
    },
    {
        _id: "6",
        name: "Pizza hải sản sốt pesto chanh sả",
        image: pz1,
        price: 215000,
        description: "Mực khoanh, tôm có đuôi, phô mai mozzarella, cà chua, hành tây, xốt pesto, xốt chanh, parsley",
        category: "Pizza" 
    },
    {
        _id: "7",
        name: "Pizza bơ gơ bò mỹ xốt phô mai ngập vị",
        image: pz2,
        price: 205000,
        description: "Nước xốt ngon",
        category: "Pizza" 
    },
    {
        _id: "8",
        name: "Pizza siêu topping bò và tôm nướng kiểu mỹ",
        image: pz3,
        price: 235000,
        description: "Tăng 50% lượng topping protein: tôm, thịt bò Mexico; thêm phô mai mozzarella, cà chua, hành, xốt cà chua, xốt mayonnaise xốt phô mai",
        category: "Pizza" 
    },
    {
        _id: "9",
        name: "Bánh bông lan trứng muối",
        image: bn1,
        price: 80000,
        description: "Bánh ngọt",
        category: "Bánh ngọt" 
    },
    {
        _id: "10",
        name: "Bánh cuộn cacao",
        image: bn2,
        price: 75000,
        description: "Ngon lắm",
        category: "Bánh ngọt"
    },
];
