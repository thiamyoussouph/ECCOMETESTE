
// Ajouter au panier pour chaque carte
document.querySelectorAll('.addToCart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const color = document.getElementById(`color${index + 1}`).value;
        const size = document.getElementById(`size${index + 1}`).value;
        alert(`Produit ${index + 1} ajouté au panier : Couleur ${color}, Pointure ${size}.`);
    });
});
