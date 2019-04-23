DROP TABLE flowers;

CREATE TABLE flowers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  sun VARCHAR(255),
  water VARCHAR(255),
  soil VARCHAR(255)
);



INSERT INTO flowers (name, sun, water, soil) VALUES ('Monstera', 'Full Sun', 'Mesic', 'Slightly Acid');
INSERT INTO flowers (name, sun, water, soil) VALUES ('Daylily', 'Full Sun', 'Mesic', 'Neutral');
INSERT INTO flowers (name, sun, water, soil) VALUES ('Fuzzy Navel', 'Full Sun', 'Mesic', 'Slightly Acid');
INSERT INTO flowers (name, sun, water, soil) VALUES ('Zinnia', 'Full Sun', 'Mesic', 'Neutral');
INSERT INTO flowers (name, sun, water, soil) VALUES ('Tall Bearded Iris', 'Full Sun', 'Mesic', 'Slightly Alkaline');
