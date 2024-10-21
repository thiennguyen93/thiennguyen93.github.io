// window.addEventListener('DOMContentLoaded', () =&gt; {   
//   const confettiBtn = document.getElementById('confetti-btn');
//   confettiBtn.addEventListener('click', confetti);

//   const sparklesBtn = document.getElementById('sparkles-btn');
//   sparklesBtn.addEventListener('click', sparkles); 
// });

    
const confetti = () =&gt; {
  party.confetti(document.body, {
    count: party.variation.range(30, 60),
    size: party.variation.range(1.1, 1.4),
    speed: party.variation.range(50, 600)
  });
}

    
const sparkles = () =&gt; {
  party.sparkles(document.body, {
    count: party.variation.range(50, 100),
    size: party.variation.range(1.1, 1.4),
    speed: party.variation.range(50, 600)
  });
}