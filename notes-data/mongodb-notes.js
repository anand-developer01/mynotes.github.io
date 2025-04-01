const isHighlighted = 'mongodb-notes'
const Links1 = 'MERN-notes'
const Links2 = 'mongodb-notes'
const Links3 = 'express-js'
const Links4 = 'javascript-projects'

const mongodbData = {
    mongodbNote: [
        {
            id: 1,
            title: "Error Handling",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Interview",
            title: "Interview",
            note: [
                {
                    text1: `1. What is the difference between a replica set and a sharded cluster in MongoDB?
How do they work together to ensure data redundancy and scalability?

What are the advantages and disadvantages of using one over the other?

2. Explain the write concern and read concern in MongoDB.
What are the different levels of write concern (e.g., w: 1, w: "majority")?

How do read concerns like local, available, and linearizable affect consistency?

3. How does MongoDB handle data consistency in a sharded environment?
How does it ensure consistency and handle transactions across shards?

What is the role of the Config Servers and Shard Key in a sharded cluster?

4. What is the role of the oplog in a replica set?
How does the oplog work in terms of replication and data consistency?

What can go wrong if the oplog becomes too small or gets filled?

5. Explain the concept of "Journaling" in MongoDB.
What is the purpose of journaling, and how does it affect performance and durability?

How does MongoDB ensure that no data is lost in the event of a crash?

6. How would you optimize MongoDB for performance when dealing with large datasets?
What are the best practices for indexing, schema design, and query optimization in MongoDB?

How would you handle a large number of simultaneous writes or heavy read traffic?

7. Describe the write path in MongoDB.
What happens when a write operation is issued?

How does MongoDB decide whether to write to the primary or secondary nodes in a replica set?

8. What is the aggregation pipeline in MongoDB?
How does it work, and what are its stages?

How do you optimize aggregation pipelines for performance?

9. Explain the role of mongod and mongos in a MongoDB deployment.
What are the differences between them, and how do they interact with each other in a sharded cluster?

10. How do you handle schema migrations in MongoDB when the application schema changes over time?
What strategies can be used for safely migrating schemas in a production environment?

How would you manage backward compatibility?

11. What are capped collections in MongoDB?
How do they work, and in what use cases would you use them?

What are their limitations compared to normal collections?

12. Explain the concept of “indexing” in MongoDB.
What are the different types of indexes in MongoDB (e.g., compound, text, geospatial)?

How do indexes affect write performance and query performance?

13. What are the benefits and trade-offs of using a compound index in MongoDB?
When would you use a compound index, and how does it differ from a single-field index?

What performance considerations should be made when using compound indexes?

14. How do you handle concurrency in MongoDB?
What locking mechanisms are used?

How does MongoDB implement multi-document ACID transactions, and how does it compare to relational databases?

15. Explain the concept of "Capable Transactions" in MongoDB 4.x and above.
How does MongoDB implement ACID transactions across multiple documents and collections?

What limitations exist when using transactions in MongoDB?

16. How would you scale MongoDB horizontally?
Explain the sharding strategy you would implement for scaling.

How does MongoDB decide how to distribute data across shards?

17. What are the different consistency models MongoDB provides?
How does MongoDB handle consistency, availability, and partition tolerance in a distributed environment?

18. How do you monitor the health and performance of a MongoDB cluster?
What metrics and tools do you use to monitor a MongoDB cluster (e.g., mongostat, mongotop, Atlas)?

What performance bottlenecks should you look for in a large-scale MongoDB deployment?

19. What are some common pitfalls or mistakes when designing MongoDB schemas?
What are the challenges of using denormalization and embedding vs. referencing data in MongoDB?

How do you avoid issues related to data duplication, fragmentation, or inefficient queries?

20. How does MongoDB handle data replication?
What happens when a replica set member falls behind or gets out of sync?

How does the readPreference setting impact read behavior in a replica set?

21. What is the findAndModify operation, and how does it differ from other update operations in MongoDB?
What are the use cases for findAndModify?

How do you ensure atomicity with findAndModify?

22. How does MongoDB handle backups and disaster recovery?
What are the different methods for taking backups in MongoDB?

How would you restore a MongoDB backup after a disaster, and what precautions do you take?

23. How do you handle versioning and compatibility with MongoDB drivers?
What challenges arise with backward compatibility and driver updates?

How do you ensure your application continues to work across different versions of MongoDB?

24. What are some common MongoDB performance issues, and how would you troubleshoot them?
How would you identify and solve performance problems such as high CPU usage, slow queries, or excessive disk I/O?

25. Can you explain MongoDB’s WiredTiger storage engine and its advantages?
What are the main features of the WiredTiger storage engine?

How does it compare to the MMAPv1 engine in terms of performance and use cases?`,
                    code1: ``
                }
            ]
        },
    ]
}