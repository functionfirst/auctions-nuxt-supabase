CREATE TABLE auctions (
  id varchar primary key  NOT NULL,
  text text,
  done boolean,
  created_at TIMESTAMP DEFAULT(now()) NOT NULL
)
