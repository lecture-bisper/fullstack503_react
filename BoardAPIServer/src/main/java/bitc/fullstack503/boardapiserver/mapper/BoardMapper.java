package bitc.fullstack503.boardapiserver.mapper;

import bitc.fullstack503.boardapiserver.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  List<BoardDTO> selectBoardList() throws Exception;

  BoardDTO selectBoardDetail(int boardIdx) throws Exception;
}












