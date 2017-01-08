var blog_window = new Vue({
    el: '#blog-window',
    data: {
        currentPost: 0,
        posts: [
            {
                title: 'Hello World!',
                content: 'Bacon ipsum dolor amet ea qui occaecat lorem, ut dolor jowl culpa hamburger laboris bacon nisi. Pastrami brisket ea shoulder. Frankfurter pancetta reprehenderit ut ex shankle. Corned beef venia...',
                image: 'assets/images/nyc.jpg'
            },
            {
                title: 'Interstellar',
                content: 'Bacon ipsum dolor amet ea qui occaecat lorem, ut dolor jowl culpa hamburger laboris bacon nisi. Pastrami brisket ea shoulder. Frankfurter pancetta reprehenderit ut ex shankle. Corned beef venia...',
                image: 'assets/images/alps.jpg'
            },
            {
                title: 'ES6 for Dummies',
                content: 'Bacon ipsum dolor amet ea qui occaecat lorem, ut dolor jowl culpa hamburger laboris bacon nisi. Pastrami brisket ea shoulder. Frankfurter pancetta reprehenderit ut ex shankle. Corned beef venia...',
                image: 'assets/images/cara.jpg'
            }
        ]
    },
    // Not pure
    filters: {
        trimString: function(str, truncateBy = 180) {
            return !str ? '' : [str.slice(0, truncateBy), ' ...'].join('');
        }
    },
    methods: {
       cycleNext: function() {
           this.currentPost = this.posts[this.currentPost + 1] !== undefined ?
                this.currentPost += 1 :
                this.currentPost = 0
       }
    },
    computed: {
        styles: function() {
            return {
                background: 'url('+this.posts[this.currentPost].image+') \
                center center / cover no-repeat'
            }
        }
    }
});