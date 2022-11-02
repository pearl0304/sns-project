import React, {useState} from 'react';

// CSS
import {WriterWrapper} from "../css/Write.styled";
import {Button, Input} from "@mui/material";

// Interface
import {PostInputInterface} from "../interfaces/post.interface";

export const Write = ({userInfo}: any) => {
    const [post, setPost] = useState<PostInputInterface>({
        uid: "",
        text: "",
        photoURL: []
    })
    const [posts, setPosts] = useState<PostInputInterface[]>([]);
    return <WriterWrapper>
        <div>
            <form>
                <Input type={'file'}/>
                <Input type={'text'}/>
                <Button type={'submit'} variant="contained">Upload</Button>
            </form>
        </div>
    </WriterWrapper>
}