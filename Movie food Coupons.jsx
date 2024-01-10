const Quixote = () => (
  <Document>
    <Page wrap={true} style={styles.body}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            price: 100,
            name: "PAKODA",
            pieces: 50,
          },
          {
            price: 60,
            name: "AALU CHOP",
            pieces: 50,
          },
          {
            price: 40,
            name: "SAUSAGE",
            pieces: 30,
          },
          {
            price: 40,
            name: "BREAD CHOP",
            pieces: 25,
          },
          {
            price: " ",
            name: "PARATHA",
            pieces: 35,
          },
          {
            price: 60,
            name: "WAI WAI\nSAADHEKO",
            pieces: 25,
          },
          {
            price: 30,
            name: "REAL JUICE",
            pieces: 15,
          },
          {
            price: 90,
            name: "NESCAFE",
            pieces: 10,
          },
          {
            price: " ",
            name: "RED MUD \nCOFFEE",
            pieces: 50,
          },
          {
            price: 25,
            name: "MILK TEA",
            pieces: 150,
          },
          {
            price: " ",
            name: " ",
            pieces: 22,
          },
        ].map(({ price, name, pieces }) => {
          return Array(pieces)
            .fill({
              name: name,
              price: price,
            })
            .map(({ name, price }, index) => (
              <>
                <Coupon
                  name={name}
                  price={price}
                  number={index + 1}
                  key={index}
                />
                <Coupon
                  name={name}
                  price={price}
                  number={index + 1}
                  key={index}
                />
              </>
            ));
        })}
      </View>
    </Page>
  </Document>
);

function Coupon({ number, name, price }) {
  return (
    <View
      wrap={false}
      style={{
        width: "25%",
      }}
    >
      <View
        style={{
          border: "1px solid back",
          padding: "4px",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: "10px",
          }}
        >
          Coupon No. {number}
        </Text>
      </View>
      <View
        style={{
          border: "1px solid back",
          padding: "4px",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: "10px",
          }}
        >
          B.Sc. CSIT 2021
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "10px",
          }}
        >
          MOVIE DAY
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "10px",
          }}
        >
          -DEAD POETS SOCIETY-
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "16px",
            padding: "16px 0 4px 0",
            fontFamily: "Times-Bold",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "16px",
            padding: "0 0 4px 0",
            fontFamily: "Times-Bold",
          }}
        >
          Rs. {price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 35,
    fontFamily: "Times-Roman",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

ReactPDF.render(<Quixote />);
