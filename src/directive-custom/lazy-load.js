
export default {
    mounted(el, binding) {
        const loadImage = () => {
            const src = binding.value;
            const img = new Image();
            img.src = src;
            img.onload = () => {
                el.src = src;
                el.classList.add('loaded');
            };
        };

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadImage();
                        observer.unobserve(el);
                    }
                });
            });
            observer.observe(el);
        } else {
            loadImage();
        }
    }
};
