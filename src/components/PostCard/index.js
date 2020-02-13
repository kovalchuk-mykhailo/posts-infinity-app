import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";

const PostCard = ({ post }) => {
  const { title, text, userName, postedDate } = post;
  const parsedPostedDate = new Date(postedDate).toDateString();
  const subheader = `@${userName}, ${parsedPostedDate}`;

  return (
    <div>
      {title && (
        <Card>
          <CardHeader
            title={title}
            subheader={subheader}
            style={{ background: "rgb(199, 150, 192)" }}
          />
          <CardContent>
            <Typography variant="h6">{text}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
export default PostCard;
