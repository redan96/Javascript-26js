function callById(id) {
	console.log(id)
		window.location.href = ('../pagePost.html?id=' + id)
}

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards-container")
  let cardsHtml = ""

  const getPostData = async() => {
		const response = await fetch('http://localhost:3000/posts', {
			method: 'GET',
		})
		const posts = await response.json()
		console.log(posts)
			
				posts.reverse().map((post) =>{
					console.log(post)
					const cardsTemplate = 
					`<div class="card card-body">
					<section class="container">
						<div class="row">
							<div class="col-12 col-lg-12 ">
								<div class="cover-container">
									<img class="cover-container__image img-none" src="${post.image}" alt="">
								</div>
								<div class="d-inline-flex">
									<img src="${post.user.avatar}" alt="image user profile" height="40px" width="40px"
										style="border-radius: 360px; display: inline-flex;">
									<div>
										<h6 class="m-0 ms-2">${post.user.name} ${post.user.lastName}</h6>
										<p class="m-0 ms-2 fs-6">${post.date}</p>
									</div>
								</div>
								<div class="ps-5 ms-2">
									<h3 onclick='callById("${post._id}")' class="card__tittle" id="linkPost">${post.tittle}</h3>
									<div>
										<a class="card__green-bg" href="">#discuss</a>
										<a href="">#beginners</a>
										<a href="">#programming</a>
										<a href="">#computerscience</a>
									<div>
										<div class="d-flex justify-content-between">
											<div>
												<button class="card__nobg-button"><img src="" alt=""> 21 reactions</button>
												<button class="card__nobg-button"><img src="/images/post/coments-icon.svg" alt="">${post.coments.length} coments</button>
											</div>
											<div>
												<button class="card__nobg-button card__read-button">1 min read</button>
												<button class="card__save-button"><img src="/images/post/save-icon.svg" alt=""Save</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>`
			// concatenacion de string
			cardsHtml += cardsTemplate
			
		})
		// Aqui se inserta el codigo html programaticamente
		cardsContainer.innerHTML = cardsHtml
		console.log(cardsHtml)
	
	}
	
	getPostData()
})




