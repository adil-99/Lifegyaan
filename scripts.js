document.addEventListener('DOMContentLoaded', function() {
    const experiencesContainer = document.querySelector('.experiences-container');
    const experienceForm = document.getElementById('experience-form');
    const topicsContainer = document.querySelector('.topics-container');
    const feedbackForm = document.getElementById('feedback-form');

    // Sample experiences
    const experiences = [
        { title: 'My Journey to Minimalism', content: 'Sharing my experiences on how minimalism changed my life.', topic: 'Lifestyle' },
        { title: 'Overcoming Adversity', content: 'How I faced and overcame significant challenges in my life.', topic: 'Motivation' },
        { title: 'Traveling the World', content: 'The joys and challenges of traveling to different countries.', topic: 'Travel' },
        { title: 'Starting a Business', content: 'My experience of starting a business from scratch.', topic: 'Business' },
        { title: 'Healthy Eating', content: 'How adopting a healthy diet transformed my life.', topic: 'Health' },
        { title: 'Returning to School', content: 'The challenges and rewards of going back to school as an adult.', topic: 'Education' },
        { title: 'Building Strong Relationships', content: 'My journey to fostering meaningful relationships.', topic: 'Relationships' },
        { title: 'Embracing Technology', content: 'How embracing new technology has improved my daily life.', topic: 'Technology' },
        { title: 'Financial Freedom', content: 'Steps I took to achieve financial freedom.', topic: 'Finance' },
        { title: 'Finding New Hobbies', content: 'How discovering new hobbies enriched my life.', topic: 'Hobbies' },
        { title: 'Mindfulness Meditation', content: 'The benefits of mindfulness and meditation in my life.', topic: 'Lifestyle' },
        { title: 'Overcoming Fear', content: 'How I overcame my fears and took control of my life.', topic: 'Motivation' },
        { title: 'Backpacking Across Europe', content: 'Experiencing the diverse cultures and landscapes of Europe.', topic: 'Travel' },
        { title: 'Launching an E-commerce Store', content: 'The process of starting and growing my online store.', topic: 'Business' },
        { title: 'Yoga for Health', content: 'How practicing yoga has improved my physical and mental health.', topic: 'Health' },
        { title: 'Online Learning', content: 'My experience with online courses and distance education.', topic: 'Education' },
        { title: 'Navigating Family Dynamics', content: 'Managing relationships within a large and diverse family.', topic: 'Relationships' },
        { title: 'Smart Home Gadgets', content: 'How smart home technology has made my life easier.', topic: 'Technology' },
        { title: 'Investing in Stocks', content: 'My journey into stock market investing.', topic: 'Finance' },
        { title: 'Creative Writing', content: 'How writing stories and poetry has become a fulfilling hobby.', topic: 'Hobbies' },
        { title: 'Living a Sustainable Lifestyle', content: 'My efforts to live a more environmentally friendly life.', topic: 'Lifestyle' },
        { title: 'Personal Growth', content: 'The steps I took to become a better version of myself.', topic: 'Motivation' },
        { title: 'Exploring Asia', content: 'The rich experiences from traveling across Asian countries.', topic: 'Travel' },
        { title: 'Entrepreneurship Lessons', content: 'Lessons learned from starting multiple businesses.', topic: 'Business' },
        { title: 'Mental Health Awareness', content: 'How I learned to manage and improve my mental health.', topic: 'Health' }
    ];

    const topics = [
        'Lifestyle', 'Motivation', 'Travel', 'Business', 'Health', 'Education', 'Relationships', 'Technology', 'Finance', 'Hobbies'
    ];

    function displayExperiences(filterTopic = '') {
        experiencesContainer.innerHTML = '';
        experiences.filter(exp => filterTopic === '' || exp.topic === filterTopic).forEach(exp => {
            const card = document.createElement('div');
            card.classList.add('experience-card');
            card.innerHTML = `
                <h3>${exp.title}</h3>
                <p>${exp.content}</p>
            `;
            experiencesContainer.appendChild(card);
        });
    }

    function displayTopics() {
        topics.forEach((topic, index) => {
            const box = document.createElement('div');
            box.classList.add('topic-box');
            box.style.backgroundColor = `hsl(${index * 36}, 100%, 80%)`; // Different color for each box
            box.innerHTML = `<h3>${topic}</h3>`;
            box.addEventListener('click', () => displayExperiences(topic));
            topicsContainer.appendChild(box);
        });
    }

    experienceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const topic = prompt('Enter the topic for your experience:', '');

        if (title && content && topic) {
            experiences.push({ title, content, topic });
            displayExperiences();
            experienceForm.reset();
        }
    });

    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            console.log('Feedback submitted:', { name, email, message });
            feedbackForm.reset();
            alert('Thank you for your feedback!');
        }
    });

    displayExperiences();
    displayTopics();
});
