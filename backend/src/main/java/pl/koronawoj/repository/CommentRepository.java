package pl.koronawoj.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import pl.koronawoj.domain.Comment;

@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {
	
	List<Comment> findByNewsId(String id);

}
