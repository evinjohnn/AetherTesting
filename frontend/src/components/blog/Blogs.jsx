import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../ThemeConfig";
import { useNavigate } from "react-router-dom";
import { clientaxiosInstance } from "../../utils/baseurl";
import { IoSearch } from "react-icons/io5";
import SkeletonModule from "../screens/Skeleton";
import Pagination from "../screens/Pagination";

import Aos from "aos";
import "aos/dist/aos.css";
// React Component
const BlogPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, settotalPages] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    setIsLoading(true);
    try {
      const response = await clientaxiosInstance.get("/categories");
      setCategory(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching faq data:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchBlog();
  }, [page, searchTerm]);

  const fetchBlog = async (category) => {
    setIsLoading(true);

    try {
      const response = await clientaxiosInstance.get(
        `/blogs/?page=${page}&limit=${limit}`,
        {
          params: {
            category,
            searchTerm,
          },
        }
      );
      setBlogs(response.data.data.blogs);
      setIsLoading(false);
      settotalPages(response.data.data.totalPages);
    } catch (error) {
      console.error("Error fetching Blog data:", error);
      setIsLoading(false);
    }
  };

  const handleBlogDetail = (id) => {
    // Navigate to blog detail page
    navigate(`/blog-detail/${id}`);
  };
  function trimDescription(content, wordLimit = 18) {
    // Split the content into words using spaces
    const words = content.split(" ");

    // Check if the number of words exceeds the limit
    if (words.length > wordLimit) {
      // Join only the first 'wordLimit' words and append an ellipsis
      return words.slice(0, wordLimit).join(" ") + "...";
    }

    // Return the content as is if within the limit
    return content;
  }

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category); // Log the selected category
    fetchBlog(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search term:", e.target.value); // Log the search term
    // Add your search logic here
    setSearchTerm(e.target.value);
  };

  return (
    <MainContainer>
      <div className="wrapper">
        <PageContainer>
          <Sidebar>
            <SearchBar>
              <input
                type="text"
                placeholder="Search Title..."
                onChange={handleSearch}
              />
              <button>
                <IoSearch />
              </button>
            </SearchBar>
            <Section data-aos="fade-up">
              <h3>Categories</h3>
              <CategoryList>
                {category &&
                  category.map((topic, index) => (
                    <li
                      className={
                        selectedCategory === topic.title ? "selected" : ""
                      }
                      key={index}
                      onClick={() => handleSelectCategory(topic.title)}
                      // style={{
                      //   backgroundColor:
                      //     selectedCategory === topic ? "red" : "transparent",
                      // }}
                    >
                      {topic.title}
                    </li>
                  ))}
              </CategoryList>
            </Section>
            <Section data-aos="fade-up">
              <h3>Top Posts</h3>
              <TopPosts>
                {blogs &&
                  blogs.slice(0.5).map((post, index) => (
                    <ul>
                      <li onClick={() => handleBlogDetail(post._id)}>
                        <span>{index + 1}</span>

                        {post.title}
                        <p>
                          {post.createdAt
                            ? new Date(post.createdAt).toLocaleString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "November 20, 2024"}
                        </p>
                      </li>
                    </ul>
                  ))}
              </TopPosts>
            </Section>
          </Sidebar>

          {/* Main Content */}
          <MainContent>
            {isLoading ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
                  gap: "10px", // Adjust the gap between items as needed
                }}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonModule
                    key={index}
                    width={350}
                    height={300}
                    borderRadius={10}
                  />
                ))}
              </div>
            ) : blogs.length === 0 ? ( // Check if data is empty
              <NoData>No data available</NoData>
            ) : (
              <PostsGrid>
                {blogs &&
                  blogs.map((post, index) => (
                    <PostCard
                      key={index}
                      onClick={() => handleBlogDetail(post._id)}
                    >
                      <img src={`${post.image}`} alt="Post" />
                      <div className="content">
                        <span>
                          {post.author ? post.author : "AI in Healthcare "}-{" "}
                          {post.createdAt
                            ? new Date(post.createdAt).toLocaleString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "November 20, 2024"}
                        </span>
                        <h4>{post.title}</h4>
                        <p>
                          {post.content
                            ? trimDescription(post.content)
                            : trimDescription(
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae."
                              )}
                        </p>
                      </div>
                    </PostCard>
                  ))}
              </PostsGrid>
            )}
            <Pagination
              initialPage={page}
              totalPages={totalPages}
              getData={setPage}
            />
          </MainContent>
        </PageContainer>
      </div>
    </MainContainer>
  );
};

export default BlogPage;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const hoverEffect = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const MainContainer = styled.section``;

// Styled Components
const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2.5fr;
  gap: 50px;

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div``;

const SearchBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  background-color: ${colors.white};
  padding: 10px 16px;
  margin-bottom: 2rem;

  input {
    background: transparent;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      justify-self: end;
      color: ${colors.grey_border};
    }
  }
  button {
    justify-self: end;
  }
  svg {
    font-size: 20px;
    color: ${colors.grey_border};
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
  border: 1.5px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 1rem;
  background: ${colors.grey_background};

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #fff;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 4px;

  li {
    margin: 15px 0;
    cursor: pointer;
    padding-bottom: 12px;
    border-bottom: 1px solid ${colors.grey_border};
    font-weight: 300;
    color: ${colors.white};
    &:hover {
      color: ${colors.theme_red};
    }
    &.selected {
      color: ${colors.theme_red};
    }
  }

  @media screen and (max-width: 480px) {
    li {
      font-size: 15px;
    }
  }
`;

const TopPosts = styled.div`
  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 15px 0;
      padding-bottom: 12px;
      display: grid;
      grid-template-columns: 0.1fr 2fr;
      align-items: center;
      gap: 10px;
      text-transform: capitalize;
      font-size: 15px;
      /* align-items: center; */

      span {
        color: #ff4500;
        font-size: 22px;
      }
    }
    p {
      font-size: 12px;
      color: ${colors.grey_border};
      grid-column: span 2;
    }
  }
`;

const MainContent = styled.div`
  flex: 1;
`;

const NoData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.white};
  margin-top: 2rem;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default for large screens */
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`;
const PostCard = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
  color: ${colors.black};
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-out both;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  .content {
    padding: 0 1rem;

    h4 {
      font-size: 1rem;
      font-weight: 500;
      padding: 10px 0;
    }

    p {
      font-size: 14px;
      color: ${colors.black};
      padding-bottom: 20px;
    }

    span {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      color: ${colors.grey_border};
    }
  }
`;
