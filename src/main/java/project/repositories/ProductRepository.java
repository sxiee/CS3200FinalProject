package project.repositories;

import project.models.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository  extends CrudRepository<Product, Integer> {
    @Query(value = "SELECT * FROM product",
            nativeQuery = true)
    public List<Product> findAllProducts();
    @Query(value = "SELECT * FROM product WHERE id=:productId",
            nativeQuery = true)
    public Product findProductById(@Param("productId") Integer id);
}

