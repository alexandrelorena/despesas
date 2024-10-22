package br.com.controle.financas.controller;

import br.com.controle.financas.model.Despesas;
import br.com.controle.financas.repository.DespesasRepository;
import io.swagger.v3.oas.annotations.Operation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/despesas")
public class DespesasController {

    @Autowired
    private DespesasRepository despesasRepository;

    @Operation(summary = "Listar todas as despesas")
    @GetMapping
    public List<Despesas> getAllDespesas() {
        return despesasRepository.findAll();
    }

    @Operation(summary = "Obter despesa por ID")
    @GetMapping("/{id}")
    public ResponseEntity<Despesas> getDespesaById(@PathVariable Long id) {
        return despesasRepository.findById(id)
                .map(despesa -> ResponseEntity.ok().body(despesa))
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Criar uma nova despesa")
    @PostMapping
    public Despesas createDespesa(@RequestBody Despesas despesa) {
        return despesasRepository.save(despesa);
    }

    @Operation(summary = "Atualizar uma despesa existente")
    @PutMapping("/{id}")
    public ResponseEntity<Despesas> updateDespesa(@PathVariable Long id, @RequestBody Despesas despesaDetails) {
        return despesasRepository.findById(id)
                .map(despesa -> {
                    despesa.setDescricao(despesaDetails.getDescricao());
                    despesa.setValor(despesaDetails.getValor());
                    despesa.setData(despesaDetails.getData());
                    Despesas updatedDespesa = despesasRepository.save(despesa);
                    return ResponseEntity.ok(updatedDespesa);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Excluir uma despesa")
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteDespesa(@PathVariable Long id) {
        return despesasRepository.findById(id)
                .map(despesa -> {
                    despesasRepository.delete(despesa);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}