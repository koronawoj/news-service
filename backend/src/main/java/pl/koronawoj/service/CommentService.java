package pl.koronawoj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pl.koronawoj.domain.Comment;
import pl.koronawoj.repository.CommentRepository;

import static java.util.stream.Collectors.toList;

@Service
public class CommentService implements ServiceInterface<Comment>, CustomInterfaceComment {
	
	@Autowired
	public CommentRepository commentRepository;

	@Override
	public List<Comment> getObj() {
		List<Comment> commentList = commentRepository.findAll();
		return convertToDTOs(commentList);
	}

	private List<Comment> convertToDTOs(List<Comment> models) {
		return models.stream().map(this::convertToDTO).collect(toList());
	}
	
	private Comment convertToDTO(Comment model){
		Comment dto = new Comment();
		dto.setId(model.getId());
		dto.setData(model.getData());
		dto.setAuthor(model.getAuthor());
		dto.setNewsId(model.getNewsId());
		dto.setComment(model.getComment());
		return dto;
	}

	@Override
	public Comment create(Comment obj) {
		return commentRepository.save(obj);
	}

	@Override
	public Comment findById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Comment update(Comment obj) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Comment> findByNewsId(String id) {
		
		List<Comment> commentList = commentRepository.findByNewsId(id);
		System.out.println(convertToDTOs(commentList));
		return convertToDTOs(commentList);
	}

}
