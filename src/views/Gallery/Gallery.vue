<template>
  <div class="container-gallery">
    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/images/interior/interior2.jpg"
          alt="Picture by Kyle Cottrell"
          class="card__image"
        />
        <figcaption class="card__caption">
          <h2 class="card__title">Enterijer naših lokala</h2>
          <p class="card__snippet">
            Pogledajte izgled naših lokala velvet coffee & kitchen i velvet pub
          </p>
          <router-link to="/galerija/enterijer"
            ><button class="menu-btn">Pogledaj</button></router-link
          >
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/images/background/background-food.jpg"
          alt="Picture by Nathan Dumlao"
          class="card__image"
        />
        <figcaption class="card__caption">
          <h2 class="card__title">Slike naših jela</h2>
          <p class="card__snippet">
            Ako ste u nedoumici, pogledajte slike naših jela , nešto što smo
            posebno izdvojili za Vas.
          </p>
          <router-link to="/galerija/hrana"
            ><button class="menu-btn">Pogledaj</button></router-link
          >
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
