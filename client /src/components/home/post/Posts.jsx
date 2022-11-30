import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
import { API } from '../../../service/api';

//components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    // searchparamse se ham log url search kar skate hai
    // category change toh url change 
    useEffect(() => {
        const fetchData = async () => { 
            // saare post lelo bhai
            let response = await API.getAllPosts({ category : category || '' });
            // saare post lelo yaar jaldi se
            if (response.isSuccess) {
                // post ko setaccount type kardiya 
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category]);
// lg mein 3 sm mein 4 xs=12 
    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Posts;