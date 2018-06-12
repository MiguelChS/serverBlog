import * as React from 'react';
import { Post, IProps as PropertyPost, enumTypePost } from 'blg-post';
import { DetallePost } from 'blg-post/dist/detallePost';

export interface IProps {
  match?: {
    params: any
  }
}

export class PostPage extends React.Component<IProps, { postData: PropertyPost | null }> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      postData: null
    }
  }

  async componentDidMount() {
    let idPost = this.props.match ? this.props.match.params.id : null;
    let response = await fetch(`/api/post/${idPost}`);
    if (response.ok && response.status == 200) {
      let data = await response.json();
      this.setState({ postData: data })
    }
  }

  render() {
    if (this.state.postData) {
      return <Post {...this.state.postData} />
    }
    return null;
  }
}
