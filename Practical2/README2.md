## Docker Compose Multi-Container Application

### Exercise Summary
This README documents what I learned and implemented.

### What I Learned
I learned how to use Docker Compose to efficiently manage multiple containers instead of using individual docker run commands. The exercise demonstrated:

1. How Docker Compose Makes Setup Easy

2. Problems with Using docker run Many Times

3.  Setting Up Everything in One File (yml.file)


### Building the Images
I built the required Docker images:

#### 1. Build Nginx image

![alt text](<assets/Screenshot 2025-03-21 120921.png>)


#### 2. Build Web image

![alt text](<assets/Screenshot 2025-03-21 122608.png>)


### Running with Multiple Docker Commands
I created a network and ran each container separately:

![alt text](<assets/Screenshot 2025-03-21 122830.png>)

![alt text](<assets/Screenshot 2025-03-21 165342.png>)


### Verifying Containers
I verified all containers were running:

![alt text](<assets/Screenshot 2025-03-21 122919.png>)


### Testing the Application
I tested the application by visiting http://localhost and observed the load balancing between web1 and web2.

![alt text](<assets/Screenshot 2025-03-21 123147.png>)


### Simplifying with Docker Compose
I used Docker Compose to deploy the same application with a single command:

![alt text](<assets/Screenshot 2025-03-21 123434.png>)


### Testing Docker Compose Deployment
I verified the application was running correctly after using Docker Compose.

![alt text](<assets/Screenshot 2025-03-21 123014.png>)



### Conclusion

This practical helped me understand multi-container applications by showing that Docker Compose makes it easier to run and manage many containers together.

It works better than using many separate Docker commands