
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container")
  let blogHtml = ""

	const getPostById = async () =>{
  const search = window.location.search;
  const url = new URLSearchParams(search);
  console.log(url.get("id"));

    const response = await fetch(`http://localhost:3000/posts/${url.get("id")}`, 
    {
        method: "GET",
    });
    const post = await response.json();
    console.log(post)

    blogTemplate = 
    `<main class="col-12 col-md-11 col-xl-8 ml-3 mt-3 ms-1 me-1 mb-5"git status >
    <figure>
      <img src="${post.image}" alt="" class="principal__img">

      <figcaption class="mt-4 ms-4 d-flex" >
        <figure class="ms-2">
          <img src="" alt="" class="rounded-circle">
        </figure>
        <div class="ms-2">
          <h5>Mads Stoumann</h5>
          <p>posted on 13 may</p>
        </div>
      </figcaption>
      <div class="ms-5">
        <img src="./img/heart.svg" alt="" class="me-5">
        <img src="./img/unicorn.svg" alt="" class="me-5">
        <img src="./img/fire.svg" alt="">
      </div>
    </figure>
    <article class="post__title">
      <h1>Mobile-to-Desktop Menu in 2 Lines of CSS</h1>
      <p><span>#webdev</span><span>#css</span><span>tutorial</span><span>#javasceript</span></p>
      <section>
        <p >
          As a frontend developer, I've created numerous menus over the years. These menus have typically been the most intricate element of a website, incorporating mobile interactions, desktop transitions, item reordering, and more. In one instance, I built a mega-menu for a client that was so expansive, users mistook it for an entire webpage due to its full-page coverage.
        </p>
        <p>
          However, in my most recent project, I aimed for simplicity by utilizing some of the latest and greatest CSS features available.
                              
        </p>
        <p>
          Let's dive in!
        </p>
      </section>
      <hr >
      <section>
        <h3>Structure</h3>
        <p>
          For the markup, the simplest structure I could come up with, that still supported the flexibility needed to go from a mobile flyout to a desktop-menu, was this:
        </p>
        <img src="./img/imgCodigo1.png" alt="" class="img-fluid rounded mx auto d-block">
        <p class="mt-3">
          We'll add more classes and stuff later, but this is the basic structure. This version will wor <b>   without any JavaScript </b>, but has an accessibility-issue, we'll look into later as well.
        </p>
        <p>
          The main element, <span> &lt;header&gt;</span> is a flex-container, using justify-content: space-between to place the logo left and the toggler right:
        </p>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--9GoYFL0A--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tejyrzfa062x8psal213.png" alt="" class="img-fluid rounded mx auto d-block">

        <p class="mt-3">
          .menu-flyout is the container for two navigation-blocks: one with the main menu-items, and one with CTA's (call-to-actions).
        </p>
        <p>
          The flyout will cover the whole screen when visible, but otherwise be placed off-screen:                    
        </p>
        <img src="./img/imgCodigo2.png" alt="" class="img-fluid rounded mx auto d-block">

        <p class="mt-3">
          The navigation blocks are both flex-containers with flex-direction set to a custom property:
        </p>

        <img src="./img/imgCodigo3.png" alt="" class="img-fluid rounded mx auto d-block">
        <p class="mt-3">
          The second navigation block is placed at the bottom, using justify-content: end:
        </p>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7nDfL2dZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gq78l4h8tl2rhh5fy6h5.png" alt="" class="img-fluid rounded mx auto d-block" >

        <p class="mt-3">
          The toggler is just a styled &lt;input type="checkbox"&gt;. We can use this to reveal the flyout when clicked:
        </p>
        
        <img src="./img/imgCodigo4.png" alt="" class="img-fluid rounded mx auto d-block" >
        <img class="mt-3" src="https://res.cloudinary.com/practicaldev/image/fetch/s--dkrsAuID--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jcunvin3sc6z3v85aa9g.png" alt="" class="img-fluid rounded mx auto d-block">
        <p class="mt-3">
          Since the toggler is wrapped in a label, we can use this to hide it on desktop:
        </p>

        <img src="./img/imgCodigo5.png" alt="" class="img-fluid rounded mx auto d-block">
        <p class="mt-3">
          <span>NOTE:</span> Don't worry, everything will have classes in the final examples, it's just to simplify the examples, that I use plain tags!
        </p>
        <hr>

        <p>
          So far, so good. When we resize the screen to desktop, we get:
        </p>

        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--LFoZ49QL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7ii6fbddnpnr1wxcuwdw.png" alt="">

        <p class="mt-3">The demos have a lot more stuff going on (transitions, clamped gaps, hover etc.) than I showcased in this article.</p>
        <p>Open them on Codepen to see the full-width desktop-view — fork them — and play around with them.</p>
        <p>Let me know what you think in the comments.</p>
        <p>Photo by <a href="">Brett Sayles</a></p>

      </section>
    </article>  
    <article class="mt-5 d-flex justify-content-between" >
      <h2>Top Comments(7)</h2>
      <button type="button" class="btn btn-light comments_button--subscribe">Subscribe</button>
    </article>
                  
    <article class="mt-3 d-flex justify-content-between" >
      <img class="rounded-circle comment__photo--subscribe" src="https://res.cloudinary.com/practicaldev/image/fetch/s--9uUFz6nX--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1081123/9f000bfd-4db6-49fb-9935-8702d18d4af5.jpeg" alt="">
      <div class="form-floating comments__textarea">
        <textarea class="form-control " placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
        <label for="floatingTextarea">Add to the discussion</label>
      </div>
    </article>
    <article class="mt-5 d-flex">
      <img class="rounded-circle comments__img--compu " src="https://res.cloudinary.com/practicaldev/image/fetch/s--QnB2p2bY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1078718/e13ba47c-f025-49dd-91a1-685ad9513a50.png" alt="">
      <section class="ms-3 mt-3">
        <div >
          <p><span>Alex</span>  <span>.</span> <span>Edited on May 13 </span></p>
          <p>Geat menu!</p>
          <p>Is it possible to fix the effect of increasing the distance between items when you enlarge the window horizontally in mobile?</p>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--MqmQfU0n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/urkkv6gnbnlctv7s4vk7.png" alt="">
          
        </div>
      </section>
    </article>
</main>`

blogHtml += blogTemplate

}
 blogContainer.innerHTML = blogHtml





getPostById()

})

