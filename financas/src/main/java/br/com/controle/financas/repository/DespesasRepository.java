package br.com.controle.financas.repository;

import br.com.controle.financas.model.Despesas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DespesasRepository extends JpaRepository<Despesas, Long> {
    // Aqui você pode adicionar métodos personalizados, se necessário
}
