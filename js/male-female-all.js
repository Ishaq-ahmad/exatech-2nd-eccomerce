
let container= document.getElementById('main-container')



async function getProducts(){
    // let apiUrl= 'https://dummyjson.com/users';
    let apiUrl= 'https://fakestoreapi.com/products';

    let response= await fetch(apiUrl)
    console.log(response)

    let data= await response.json()

    //----- currentPage -----

    let currentPage= window.location.pathname.split('/').pop()

    let products=[]

       //  ==== all  page data =====
       if(currentPage === 'all_product.html'){
         products = data
       }


    
    //  ==== Men page data =====

    if(currentPage === 'male.html'){
       products= data.filter(item => item.category ===  "men's clothing")
        
    }

      
    //  ==== Female page data =====
    if(currentPage === 'female.html'){
        products= data.filter(item => item.category ===  "women's clothing")
         
    }
   


        products.push(...products)
        products.forEach(cardData => {
                const title = cardData.title
                .split(" ")
                .slice(0, 8)
                .join(" ");
                container.innerHTML += `
                
                    <div id="card">
                        <div id='image-div'>
                            <a href="/pages/detail.html?id=${cardData.id}">

                            <img src="${cardData.image}" alt="" />

                        </a>
                        </div>
                        <h3>${title}</h3>
                        <p>${cardData.category}</p>
                        <span>${cardData.price} $</span>
        
                    </div> 
                `
            });
        }


getProducts()



// navbar hidden in menu bar

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  hamburger.setAttribute("aria-expanded", isOpen);
});