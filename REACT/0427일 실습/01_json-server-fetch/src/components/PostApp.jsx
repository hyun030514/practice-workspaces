import { useEffect, useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import postAPI from "../api/postAPI";

function PostApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 선택된 게시글 데이터 관리
  const [selectedPost, setSelectedPost] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    // 게시글 목록(자원) 데이터 조회(행위, GET) 요청
    // 두번째 인자로 넘겨줘야되는데, 기본적으로 두번째 인자 안 쓰면 get 방식
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const posts = await postAPI.getAllPosts();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      setFormData({
        title: selectedPost.title,
        content: selectedPost.content,
        author: selectedPost.author,
      });
    } else {
      setFormData({
        title: "",
        content: "",
        author: "",
      });
    }
  }, [selectedPost]);

  // 핸들러는 보통 effect 아래 작성
  // 폼에 입력값 change 발생 시 실행될 이벤트 헨들러
  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // 폼에서 등록 요청시 실행될 이벤트 헨들러
  const handleRegistSubmit = async (e) => {
    e.preventDefault();
    // 게시글(자원) 데이터 생성(행위, POST) 요청

    try {
      setLoading(true);

      const data = await postAPI.addPost(formData);

      // 게시글 목록 갱신
      setPosts([...posts, data]);

      // 입력값 초기화
      setFormData({
        title: "",
        content: "",
        author: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    // 현재 선택된 게시글 데이터(자원) 수정(PUT) 요청

    try {
      setLoading(true);

      const data = await postAPI.updatePost(selectedPost.id, formData);

      // 게시글 목록 갱신
      setPosts(posts.map((post) => (post.id === data.id ? data : post)));

      // 선택된 게시글 null로 초기화
      setSelectedPost(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading 중 ...</div>;
  if (error) return <div>Error : {error} </div>;

  // lading이 false고 error가 없으면 반환됨
  return (
    <>
      {/* 게시글 목록 */}
      <PostList
        posts={posts}
        setSelectedPost={setSelectedPost}
        setPosts={setPosts}
      />
      <hr />
      {/* 게시글 등록 및 수정 폼 */}
      {!selectedPost ? (
        <PostForm
          formData={formData}
          onChange={handleFormDataChange}
          onSubmit={handleRegistSubmit}
        />
      ) : (
        <PostForm
          formData={formData}
          onChange={handleFormDataChange}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </>
  );
}

export default PostApp;
