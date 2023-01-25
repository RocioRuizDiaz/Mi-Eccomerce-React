

const Productos = [
    {
        "id": 1, 
        "name": "Jujutsu Kaisen", 
        "category": "manga",
        "price": "1990",
        "description":"description",
        "stock":7,
        "type": "Manga",
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/112/699/products/jujutsu111-affd1b7fbf33b0f88416509091691297-320-0.webp",
        "deta": "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/112/699/products/jujutsu111-affd1b7fbf33b0f88416509091691297-320-0.webp",
    },

  
    { 
        "id": 2, 
        "name": "Demos Slayer", 
        "category": "manga",
        "price": 2000,
        "description":"description",
        "stock":7,
        "type": "Manga",
        "img": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/DEMON01.jpg?v=1657956189",
        "deta": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/DEMON01.jpg?v=1657956189",
        
        
    
        
    },
  
    { 
        "id": 3,
        "name": "Spy x Family",
        "category": "manga",
        "price": 1850,
        "description":"description",
        "stock": 3,
        "type": "Manga",
        "img":"https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SPY02.jpg?v=1657949646",
        "deta":"https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SPY02.jpg?v=1657949646",
             
        },
      
      
  
     { 
     "id": 4,
     "name": "Blue Lock",
     "category": "manga",
     "price": 1250,
     "description":"description",
     "stock": 3,
     "type": "Manga",
     "img": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/BLUELOCK1.jpg?v=1645916437&width=600",
     "deta": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/BLUELOCK1.jpg?v=1645916437&width=600",
   
 },
    
     { 
     "id": 5,
     "name":"Monster", 
     "category": "comics",
     "price": 1500,
     "description":"description",
     "stock": "2",
     "type": "Manga",
     "img":"https://cdn.shopify.com/s/files/1/0628/4807/3949/products/MONSTER02.jpg?v=1663043298",
     "deta":"https://cdn.shopify.com/s/files/1/0628/4807/3949/products/MONSTER02.jpg?v=1663043298",
     
 },
    
     { 
     "id": 6,
     "name": "Oshi no ko" ,
     "category": "manga",
     "price": 1990,
     "description":"description",
     "stock": "2",
     "type": "Manga",
     "img": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/OSHI01.jpg?v=1657999910",
     "deta": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/OSHI01.jpg?v=1657999910",
    
 },
    
     { 
     "id": 7,
     "name": "Hunter x Hunter",
     "category": "manga",
     "price": "2100",
     "description":"description",
     "stock": "4",
     "type": "Manga",
     "img": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/HUNTER01.jpg?v=1657994573",
     "deta": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/HUNTER01.jpg?v=1657994573",
      
     },
   
   
    
     { 
     "id": 8, 
     "name": "Konosuba",
     "category": "comics",
     "price": "1850",
     "description":"description",
     "stock": "4",
     "type": "Manga",
     "img": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/KONO01.jpg?v=1657996193",
     "deta": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/KONO01.jpg?v=1657996193",
     
 },
    
     { 
     "id": 9,
     "name":"Sword Art Online",
     "category": "manga",
     "price": "1950",
     "description":"description", 
     "stock": "3",
     "type": "Manga",
     "img": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SAOMOTHER01.webp?v=1673698222",
     "deta": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SAOMOTHER01.webp?v=1673698222",
    
     
 },
    
     { 
     "id": 10, 
     "name": "Fullmetal Alchemist",
     "category": "comics",
     "price": "2000",
     "description": "description",
     "stock": "3",
     "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/112/699/products/fullmetalalchemist011-9c5a65eda6a179382f16497833819612-320-0.webp",
     "deta" :"https://d3ugyf2ht6aenh.cloudfront.net/stores/002/112/699/products/fullmetalalchemist011-9c5a65eda6a179382f16497833819612-320-0.webp",
     
   
    
 },
    
]

export const getProducts = () => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Productos)
        }, 500);
    })
}
 export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos.filter(prod => prod.category === categoryId))
        }, 500)
    })
 }
 export function getProductById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos.find(prod => prod.id === id));
        }, 500);
    });
}