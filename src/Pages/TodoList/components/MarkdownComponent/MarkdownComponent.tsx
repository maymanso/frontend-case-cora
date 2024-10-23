import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Paragraph, Span } from '../../../../style/common/Paragraphs/paragraphs.style';
import { Order, Link, List } from './markdownComponent.style';

interface MarkdownComponentProps {
  markdownString: string;
}
const MarkdownComponent: React.FC<MarkdownComponentProps> = ({ markdownString }) => {
  return (
    <ReactMarkdown
      components={{
        p(prop) {
          return (<Paragraph $fontSize='1.6em' $color="--color-gray" {...prop} style={{ marginTop: '3.2em' }} />)
        },
        strong(prop) {
          return (<Span $bold  {...prop} />)
        },
        ol(prop) {
          return (<Order {...prop} />)
        },
        li(prop) {
          return (<List {...prop} />)
        },
        a(prop) {
          return (<Link {...prop} style={{ marginRight: '1.6em' }} />)
        }
      }}
    >
      {markdownString.toString()}
    </ReactMarkdown>
  );
};

export default MarkdownComponent;