const sliders = document.querySelectorAll('input');
const [cheap, good, fast] = sliders;
let lastChecked = null;

sliders.forEach(slider => slider.addEventListener('change', () => {
    lastChecked = slider.checked ? slider : null;
    if(cheap.checked && good.checked && fast.checked){
		if(lastChecked === cheap){
            good.checked = false;
        } else if(lastChecked === good){
                    fast.checked= false;
        } else if(lastChecked === fast){
                    cheap.checked = false;
        }
    }
            console.log(lastChecked);
}));