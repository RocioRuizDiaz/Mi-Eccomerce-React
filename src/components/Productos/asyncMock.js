const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"


const Productos = [
    {
        "id": 1, 
        "title": "Jujutsu Kaisen", 
        "category": "manga",
        "price": "1990",
        "description":"description",
        "stock":7,
        "type": "Manga",
        "imgProduct": {
           "firtsImg": "https://static.wikia.nocookie.net/jujutsu-kaisen/images/0/0e/Volume_1.png/revision/latest?cb=20200905220554&path-prefix=es",
           "secondaryImg":"https://static.wikia.nocookie.net/jujutsu-kaisen/images/f/f6/JJK_New_Key_Visual.jpg/revision/latest/scale-to-width-down/700?cb=20200914020414&path-prefix=es",
        },
    },
  
    { 
        "id": 2, 
        "title": "Demos Slayer", 
        "category": "manga",
        "price": 2000,
        "description":"description",
        "stock":7,
        "type": "Manga",
        "imgProduct": {
            "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/DEMON01.jpg?v=1657956189",
            "secondaryImg": "https://http2.mlstatic.com/D_NQ_NP_2X_804201-MLA46352614157_062021-F.webp", 
         },
        
        
    },
  
    { 
        "id": 3,
        "title": "Spy x Family",
        "category": "manga",
        "price": 1850,
        "description":"description",
        "stock": 3,
        "type": "Manga",
        "imgProduct": {
            "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SPY02.jpg?v=1657949646",
            "secondaryImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SPY01.jpg?v=1657949646",
              },
        },
      
      
  
     { 
     "id": 4,
     "title": "Blue Lock",
     "category": "manga",
     "price": 1250,
     "description":"description",
     "stock": 3,
     "type": "Manga",
     "imgProduct": {
        "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/BLUELOCK1.jpg?v=1645916437&width=600",
        "secondaryImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/BLUELOCK2.jpg?v=1645916437&width=600",
     },
 },
    
     { 
     "id": 5,
     "title":"Monster", 
     "category": "manga",
     "price": 1500,
     "description":"description",
     "stock": "2",
     "type": "Manga",
     "imgProduct": {
        "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/MONSTER02.jpg?v=1663043298",
        "secondaryImg":"https://cdn.shopify.com/s/files/1/0628/4807/3949/products/MONSTER01.jpg?v=1663043297",
     },
 },
    
     { 
     "id": 6,
     "title": "Oshi no ko" ,
     "category": "manga",
     "price": 1990,
     "description":"description",
     "stock": "2",
     "type": "Manga",
     "imgProduct":{
        "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/OSHI01.jpg?v=1657999910",
        "secondaryImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/OSHI02.jpg?v=1663044655",
     }, 
 },
    
     { 
     "id": 7,
     "title": "Hunter x Hunter",
     "category": "manga",
     "price": "2100",
     "description":"description",
     "stock": "4",
     "type": "Manga",
     "imgProduct": {
        "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/HUNTER01.jpg?v=1657994573",
        "secondaryImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/HUNTER02.jpg?v=1657994571",
       },
     },
   
   
    
     { 
     "id": 8, 
     "title": "Konosuba",
     "category": "manga",
     "price": "1850",
     "description":"description",
     "stock": "4",
     "type": "Manga",
     "imgProduct": {
        "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/KONO01.jpg?v=1657996193",
        "secondaryImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/KONO02.jpg?v=1657996193",
     },
 },
    
     { 
     "id": 9,
     "title":"Sword Art Online",
     "category": "manga",
     "price": "1950",
     "description":"description", 
     "stock": "3",
     "type": "Manga",
     "imgProduct": {
        "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SAOMOTHER01.webp?v=1673698222",
        "secondaryImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SAOMOTHER02.webp?v=1673698223",
     },
    
     
 },
    
     { 
     "id": 10, 
     "title": "Fullmetal Alchemist",
     "category": "manga",
     "price": "2000",
     "description": "description",
     "stock": "3",
     "imgProduct": {
        "firtsImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/SAOMOTHER02.webp?v=1673698223",
        "secondaryImg": "https://cdn.shopify.com/s/files/1/0628/4807/3949/products/FULLMETAL02.jpg?v=1663024263",
     },
   
    
 },
    
]

export const getProducts = (idCategory) => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Productos)
        }, 500);
    })
}
 export const getProductsByCategory = (idCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos.filter(prod => prod.category === idCategory))
        }, 500)
    })
 }
 export function getProductsById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos.find(prod => prod.id === id));
        }, 500);
    });
}