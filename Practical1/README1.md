## Basic Docker Containerisation

### What I Learned
I learned how to use Docker for containerizing applications. The exercise demonstrated:

1. Building container images from Dockerfiles
2. Running containers with port forwarding 
3. Managing running containers
4. Using Docker Compose 
5. Executing tests within containers

### Building the Image


#### Build container image from a specific Dockerfile and tag it :


![alt text](<assets/Screenshot 2025-03-21 110241.png>)

#### Running the Container : 
![alt text](<assets/Screenshot 2025-03-21 110411.png>)

![alt text](assets/image.png)

#### The application started successfully, showing it was running on port 3000.



### Managing Containers

#### To exit a running container:

#### 1.  List running containers:

![alt text](<assets/Screenshot 2025-03-21 111024.png>)


#### 2.  Stop the container using its ID:


![alt text](<assets/Screenshot 2025-03-21 111303.png>)



### Using Docker Compose

#### I created a docker-compose.yml file and started the container using Docker Compose:

![alt text](<assets/Screenshot 2025-03-21 113515.png>)


#### To verify that the app was running, I opened my web browser and navigated to http://localhost:3000.


![alt text](<assets/Screenshot 2025-03-21 114028.png>)

### Running Tests in a Docker Container

#### 1. List running containers:

![alt text](<assets/Screenshot 2025-03-21 111024-1.png>)

#### 2. Access the container shell and run tests inside the container:



![alt text](<assets/Screenshot 2025-03-21 114709.png>)




#### 3. Checked if there were any failed tests


![alt text](<assets/Screenshot 2025-03-21 114835.png>)

#### 4. To exit the shell back to the host OS:


![alt text](<assets/Screenshot 2025-03-21 114914.png>)


 



### Conclusion

I learned the basics of Docker containerization in this practical exercise. I now understand how to build images, run containers, manage them, and use Docker Compose. Containerization creates consistent environments across development and testing which makes deploying applications more reliable and easier.