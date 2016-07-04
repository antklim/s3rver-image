### s3rver-image

This image provides emulation of Amazon S3 service.  
Images comes with predefined bucket `foo`.

Docker image based on [s3rver](https://github.com/jamhall/s3rver) (S3 server implementation on NodeJS)


#### Usage

_Run container_
```
$ docker run -it --rm --name s3-container -p <host port>:3000 antklm/s3rver-image
```  
_Requests_

  - Get buckets list
  ```
  $ curl -i <docker-machine ip>:<host port>
  ```

  - Get `foo` bucket objects
  ```
  $ curl -i <docker-machine ip>:<host port>/foo
  ```

  - Get object from `foo` bucket
  ```
  $ curl -i <docker-machine ip>:<host port>/foo/<object key>
  ```
